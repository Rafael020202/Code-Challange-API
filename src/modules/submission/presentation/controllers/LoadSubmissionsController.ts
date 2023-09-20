import { Controller, HttpResponse, Validation } from '@shared/protocols';
import { ok, noContent, badRequest } from '@shared/helpers';
import { LoadSubmissions } from '@modules/submission/domain/usecases';

export class LoadSubmissionsController implements Controller {
  constructor(private dbLoadSubmissions: LoadSubmissions, private validation: Validation) { }

  public async handle(request: LoadSubmissionsController.Request): Promise<HttpResponse> {
    const error = this.validation.validate(request);

    if (error) {
      return badRequest(error);
    }

    const submissions = await this.dbLoadSubmissions.load({
      id: request.id,
      owner: request.account_id,
      sortBy: request.sort_order ?? 'created_at',
      sortOrder: request.sort_order ?? 'asc',
      limit: request.limit ?? 50,
      skip: request.skip ?? 0
    });

    if (submissions.length) {
      return ok(request.id ? submissions[0] : submissions);
    }

    return noContent();
  }
};

export namespace LoadSubmissionsController {
  export type Request = {
    account_id: string;
    id?: string;
    sort_by?: string;
    sort_order?: string;
    limit?: number;
    skip?: number;
  };
};
