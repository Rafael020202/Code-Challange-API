import stringSimilarity from 'string-similarity';

import { ProcessAsyncSubmission } from '@modules/submission/domain/usecases';

import { LoadProblemByIdRepository } from '@modules/problem/data/protocols';
import {
  CheckSubmissionStatusProvider,
  UpdateSubmissionRespository
} from '@modules/submission/data/protocols';

export class DbProcessAsyncSubmission implements ProcessAsyncSubmission {
  constructor(
    private updateSubmissionRespository: UpdateSubmissionRespository,
    private checkSubmissionStatusProvider: CheckSubmissionStatusProvider,
    private loadProblemByIdRepository: LoadProblemByIdRepository
  ) { }

  public async process(data: ProcessAsyncSubmission.Params): Promise<ProcessAsyncSubmission.Result> {
    let count = 0;
    let time = 0;
    let memory = 0;
    let message = '';
    let compilationError = false;

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

      if (compiledSubmission.status.id === 6) {
        compilationError = true;

        break;
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
        message = `Went worng in compare ${compilerOutput} to ${output}`;
        break;
      }
    }

    const problem = await this.loadProblemByIdRepository.loadById(data.problem_id);

    let status = 'accepted';

    if (compilationError) {
      status = 'compilation_error'
    } else {
      memory = memory / count;
      time = time / count;

      if (count !== data.submissions.length || memory > problem.memory_limit || time > problem.timeout) {
        status = 'wrong';
      }
    }

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

    return true;
  }
}
