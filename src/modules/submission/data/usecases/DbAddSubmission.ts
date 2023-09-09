import stringSimilarity from 'string-similarity';

import { AddSubmission } from '@modules/submission/domain/usecases';
import { LoadProblemByIdRepository } from '@modules/problem/data/protocols';
import {
  CodeSubmitPovider,
  CheckSubmissionStatusProvider,
  AddSubmissionRespository
} from '@modules/submission/data/protocols';

export class DbAddSubmission implements AddSubmission {
  constructor(
    private loadProblemByIdRepository: LoadProblemByIdRepository,
    private addSubmissionRespository: AddSubmissionRespository,
    private codeSubmitProvider: CodeSubmitPovider,
    private checkSubmissionStatusProvider: CheckSubmissionStatusProvider
  ) {}

  public async add(data: AddSubmission.Params): Promise<AddSubmission.Result> {
    const { inputs } = await this.loadProblemByIdRepository.loadById(
      data.problem_id
    );

    let count = 0;
    let time = 0;
    let memory = 0;
    let message = '';

    for (const input of inputs) {
      const { token } = await this.codeSubmitProvider.submit({
        source_code: data.source_code,
        stdin: input.value
      });

      let submission: any =
        await this.checkSubmissionStatusProvider.checkStatus(token);

      if (submission.status.id === 2) {
        do {
          submission = await this.checkSubmissionStatusProvider.checkStatus(
            token
          );
        } while (submission.status.id === 2);
      }

      const compilerOutput = submission.stdout.split('/n')[0];
      const output = Buffer.from(input.output, 'base64').toString();
      const similarity = stringSimilarity.compareTwoStrings(
        output,
        compilerOutput
      );

      if (similarity === 1) {
        time += Number(submission.time);
        memory += Number(submission.memory);
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

    const submission = await this.addSubmissionRespository.add({
      problem_id: data.problem_id,
      source_code: data.source_code,
      user_id: data.user_id,
      memory,
      time,
      message,
      status
    });

    return submission;
  }
}
