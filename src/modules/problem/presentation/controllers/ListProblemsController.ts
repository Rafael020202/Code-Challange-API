import { Controller, HttpResponse } from '@shared/protocols';
import { ok } from '@shared/helpers';
import { ListProblems } from '@modules/problem/domain/usecases';

export class ListProblemsController implements Controller {
  constructor(private dbListProblems: ListProblems) {}

  public async handle(
    request: ListProblemsController.Request
  ): Promise<HttpResponse> {
    const result = await this.dbListProblems.list(request.user_id);

    return ok(result);
  }
}

export namespace ListProblemsController {
  export type Request = {
    user_id: string;
  };
}
