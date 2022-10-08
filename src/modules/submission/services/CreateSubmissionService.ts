import { inject, injectable } from 'tsyringe';
import stringSimilarity from 'string-similarity';
import ISubmissionDTO from '../dtos/ISubmissionDTO';
import IInputRepository from '@modules/problem/repositories/IInputRepository';
import ICompilerProvider from '../providers/CompilerProvider/models/IComplierProvider';
import ISubmissionRepository from '../repositories/ISubmissionRepository';
import Submission from '../infra/typeorm/entities/Submission';

@injectable()
export default class CreateSubmissionService {
  constructor(
    @inject('SubmissionRepository')
    private submissionRepository: ISubmissionRepository,

    @inject('CompilerProvider')
    private complierProvider: ICompilerProvider,

    @inject('InputRepository')
    private inputRepository: IInputRepository
  ) {}

  public async execute({
    source_code,
    problem_id,
    user_id
  }: ISubmissionDTO): Promise<Submission> {
    const inputs = await this.inputRepository.getByProblemId(problem_id);

    let count = 0;
    let time = 0;
    let memory = 0;
    let message = '';

    for (let i = 0; i < inputs.length; i++) {
      const data = inputs[i];

      const { token } = await this.complierProvider.submit({
        source_code,
        stdin: data.value
      });

      const response = await this.complierProvider.getSubmissionStatus(token);
      const compilerOutput = response.stdout.split('/n')[0];
      const output = Buffer.from(data.output, 'base64').toString();
      const similarity = stringSimilarity.compareTwoStrings(
        output,
        compilerOutput
      );

      if (similarity === 1) {
        time += Number(response.time);
        memory += Number(response.memory);
        count++;
      } else {
        message = `Went worng in compare ${data.output} to ${output}`;
        break;
      }
    }

    const map: { [key: number]: string } = { 0: 'accepted', 1: 'wrong' };
    const resp = Number(count !== inputs.length);
    memory = memory / count;
    time = time / count;

    /**
     * Olhar os tipos dos dados no banco pois o mesmo está alterando sozinho para int4
     */

    const submission = await this.submissionRepository.create({
      problem_id,
      source_code,
      user_id,
      memory,
      time,
      message,
      status: map[resp]
    });

    return submission;
  }
}
