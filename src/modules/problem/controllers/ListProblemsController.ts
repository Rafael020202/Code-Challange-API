import { Controller, HttpResponse } from '@shared/protocols';
import { ListProblems } from '@modules/problem/domain/usecases';

export class ListProblemsController implements Controller {
  constructor(private DbListProblems: ListProblems) {}

  public async handle(
    request: ListProblemsController.Request
  ): Promise<HttpResponse> {
    const result = await this.DbListProblems.list(request.user_id);

    return {
      body: result,
      status: 200
    };
  }
}

export namespace ListProblemsController {
  export type Request = {
    user_id: string;
  };
}
