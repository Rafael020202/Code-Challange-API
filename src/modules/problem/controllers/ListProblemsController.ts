import { Controller, HttpResponse } from '@shared/protocols';
import { ListProblemService } from '@modules/problem/services';

export class ListProblemsController implements Controller {
  constructor(private listProblemService: ListProblemService) {}

  public async handle(
    request: ListProblemsController.Request
  ): Promise<HttpResponse> {
    const result = await this.listProblemService.execute(request.user_id);

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
