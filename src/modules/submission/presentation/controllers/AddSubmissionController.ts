import { Controller, HttpResponse } from '@shared/protocols';
import { ok } from '@shared/helpers';
import { AddSubmission } from '@modules/submission/domain/usecases';

export class AddSubmissionController implements Controller {
  constructor(private dbAddSubmission: AddSubmission) {}

  public async handle(
    request: AddSubmissionController.Request
  ): Promise<HttpResponse> {
    const { user_id, ...data } = request;

    const submissionResponse = await this.dbAddSubmission.add({
      owner: user_id,
      ...data
    });

    return ok(submissionResponse);
  }
}

export namespace AddSubmissionController {
  export type Request = {
    problem_id: string;
    source_code: string;
    user_id: number;
  };
}
