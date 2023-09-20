
import { AddSubmission } from '@modules/submission/domain/usecases';
import {
  AddSubmissionRespository,
  EnqueueProvider
} from '@modules/submission/data/protocols';

export class DbAddSubmission implements AddSubmission {
  constructor(
    private addSubmissionRespository: AddSubmissionRespository,
    private enqueueProvider: EnqueueProvider
  ) { }

  public async add(data: AddSubmission.Params): Promise<AddSubmission.Result> {
    const { owner, problem_id, source_code } = data;

    const submission = await this.addSubmissionRespository.add({
      problem_id,
      source_code,
      owner,
      status: 'in_queue'
    });

    await this.enqueueProvider.enqueue({
      topic: 'start-async-submission',
      data: {
        problem_id,
        source_code,
        submission_id: submission.id,
        owner
      }
    });

    return submission.id;
  }
}
