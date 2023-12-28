import { Controller, HttpResponse, Validation } from '@shared/protocols';
import { badRequest, ok } from '@shared/helpers';
import { NotFoundError } from '@shared/errors';
import { AddSubmission } from '@modules/submission/domain/usecases';
import { LANGUAGES } from '@config/languages';

export class AddSubmissionController implements Controller {
  constructor(private dbAddSubmission: AddSubmission, private validation: Validation) { }

  public async handle(
    request: AddSubmissionController.Request
  ): Promise<HttpResponse> {
    const error = this.validation.validate(request);

    if (error) {
      return badRequest(error);
    }

    if (!LANGUAGES[request.language]) {
      return badRequest(new NotFoundError('language'));
    }

    const { account_id, ...data } = request;

    const createdSubId = await this.dbAddSubmission.add({
      owner: account_id,
      ...data
    });

    return ok({ id: createdSubId });
  }
}

export namespace AddSubmissionController {
  export type Request = {
    problem_id: string;
    source_code: string;
    account_id: string;
    language: number;
  };
}
