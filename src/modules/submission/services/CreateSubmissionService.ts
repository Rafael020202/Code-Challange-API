import { inject, injectable } from 'tsyringe';
import stringSimilarity from 'string-similarity';

import { ICreateSubmissionDTO } from '@modules/submission/dtos';
import { ISubmissionRepository } from '@modules/submission/repositories';
import { Submission } from '@modules/submission/entities';
import IProblemRepository from '@modules/problem/repositories/IProblemRepository';
import ICompilerProvider from '@modules/submission/providers/CompilerProvider/models/IComplierProvider';

@injectable()
export class CreateSubmissionService {
  constructor(
    @inject('SubmissionRepository')
    private submissionRepository: ISubmissionRepository,

    @inject('CompilerProvider')
    private complierProvider: ICompilerProvider,

    @inject('ProblemRepository')
    private problemRepository: IProblemRepository
  ) {}

  public async execute({
    source_code,
    problem_id,
    user_id
  }: ICreateSubmissionDTO): Promise<Submission> {
    const { inputs } = await this.problemRepository.getById(problem_id);

    let count = 0;
    let time = 0;
    let memory = 0;
    let message = '';

    for (const input of inputs) {
      const { token } = await this.complierProvider.submit({
        source_code,
        stdin: input.value
      });

      const response = await this.complierProvider.getSubmissionStatus(token);
      const compilerOutput = response.stdout.split('/n')[0];
      const output = Buffer.from(input.output, 'base64').toString();
      const similarity = stringSimilarity.compareTwoStrings(
        output,
        compilerOutput
      );

      if (similarity === 1) {
        time += Number(response.time);
        memory += Number(response.memory);
        count++;
      } else {
        message = `Went worng in compare ${input.output} to ${output}`;
        break;
      }
    }

    const map: { [key: number]: string } = { 0: 'accepted', 1: 'wrong' };
    const resp = Number(count !== inputs.length);
    const status = map[resp];

    memory = memory / count;
    time = time / count;

    const submission = await this.submissionRepository.create({
      problem_id,
      source_code,
      user_id,
      memory,
      time,
      message,
      status
    });

    return submission;
  }
}
