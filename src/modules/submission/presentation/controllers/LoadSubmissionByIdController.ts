import { Controller, HttpResponse } from '@shared/protocols';
import { ok, noContent } from '@shared/helpers';
import { LoadSubmissionById } from '@modules/submission/domain/usecases';

export class LoadSubmissionByIdController implements Controller {
  constructor(private dbLoadSubmissionById: LoadSubmissionById) { }

  public async handle(request: LoadSubmissionByIdController.Request): Promise<HttpResponse> {
    const submission = await this.dbLoadSubmissionById.loadById(request.id);

    if (submission) {
      return ok(submission);
    }

    return noContent();
  }
}

export namespace LoadSubmissionByIdController {
  export type Request = {
    id: string;
  };
}
