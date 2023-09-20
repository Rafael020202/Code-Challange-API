import stringSimilarity from 'string-similarity';

import { ProcessAsyncSubmission } from '@modules/submission/domain/usecases';
import {
  CheckSubmissionStatusProvider,
  UpdateSubmissionRespository
} from '@modules/submission/data/protocols';

export class DbProcessAsyncSubmission implements ProcessAsyncSubmission {
  constructor(
    private updateSubmissionRespository: UpdateSubmissionRespository,
    private checkSubmissionStatusProvider: CheckSubmissionStatusProvider
  ) { }

  public async process(data: ProcessAsyncSubmission.Params): Promise<ProcessAsyncSubmission.Result> {
    let count = 0;
    let time = 0;
    let memory = 0;
    let message = '';

    for (const sub of data.submissions) {
      let compiledSubmission: any =
        await this.checkSubmissionStatusProvider.checkStatus(sub.token);

      if ([1, 2].includes(compiledSubmission.status.id)) {
        do {
          compiledSubmission = await this.checkSubmissionStatusProvider
            .checkStatus(sub.token)
            .catch(() => compiledSubmission);
        } while ([1, 2].includes(compiledSubmission.status.id));
      }

      const compilerOutput = compiledSubmission.stdout.split('/n')[0];
      const output = Buffer.from(sub.input.output, 'base64').toString();
      const similarity = stringSimilarity.compareTwoStrings(
        output,
        compilerOutput
      );

      if (similarity === 1) {
        time += Number(compiledSubmission.time);
        memory += Number(compiledSubmission.memory);
        count++;
      } else {
        message = `Went worng in compare ${sub.input.output} to ${output}`;
        break;
      }
    }

    const map: { [key: number]: string } = { 0: 'accepted', 1: 'wrong' };
    const resp = Number(count !== data.submissions.length);
    const status = map[resp];

    memory = memory / count;
    time = time / count;

    await this.updateSubmissionRespository.update({
      problem_id: data.problem_id,
      source_code: data.source_code,
      submission_id: data.submission_id,
      owner: data.owner,
      memory,
      time,
      message,
      status
    });

    return;
  }
}
