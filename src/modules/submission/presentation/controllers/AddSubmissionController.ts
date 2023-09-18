import { Controller, HttpResponse, Validation } from '@shared/protocols';
import { badRequest, ok } from '@shared/helpers';
import { AddSubmission } from '@modules/submission/domain/usecases';

export class AddSubmissionController implements Controller {
  constructor(private dbAddSubmission: AddSubmission, private validation: Validation) { }

  public async handle(
    request: AddSubmissionController.Request
  ): Promise<HttpResponse> {
    const error = this.validation.validate(request);

    if (error) {
      return badRequest(error);
    }

    const { account_id, ...data } = request;

    const submissionResponse = await this.dbAddSubmission.add({
      owner: account_id,
      ...data
    });

    return ok(submissionResponse);
  }
}

export namespace AddSubmissionController {
  export type Request = {
    problem_id: string;
    source_code: string;
    account_id: number;
  };
}
