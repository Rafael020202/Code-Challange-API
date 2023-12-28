import { StartAsyncSubmission } from '@modules/submission/domain/usecases';
import { LoadProblemByIdRepository } from '@modules/problem/data/protocols';
import {
  CodeSubmitPovider,
  EnqueueProvider
} from '@modules/submission/data/protocols';

export class DbStartAsyncSubmission implements StartAsyncSubmission {
  constructor(
    private loadProblemByIdRepository: LoadProblemByIdRepository,
    private codeSubmitProvider: CodeSubmitPovider,
    private enqueueProvider: EnqueueProvider
  ) { }

  public async start(data: StartAsyncSubmission.Params): Promise<StartAsyncSubmission.Result> {
    const { owner, problem_id, source_code, submission_id, language } = data;
    const { inputs } = await this.loadProblemByIdRepository.loadById(
      problem_id
    );
    const submissions = [];

    for (const input of inputs) {
      const { token } = await this.codeSubmitProvider.submit({
        source_code,
        stdin: input.value,
        language
      });

      submissions.push({
        input,
        token
      });
    }

    await this.enqueueProvider.enqueue({
      topic: 'process-async-submission',
      data: {
        submissions,
        submission_id,
        owner,
        problem_id,
        source_code
      }
    });

    return true;
  }
}
