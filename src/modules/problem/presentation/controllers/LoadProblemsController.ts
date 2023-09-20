import { Controller, HttpResponse } from '@shared/protocols';
import { noContent, ok } from '@shared/helpers';
import { LoadProblems } from '@modules/problem/domain/usecases';

export class LoadProblemsController implements Controller {
  constructor(private dbLoadProblems: LoadProblems) { }

  public async handle(
    request: ListProblemsController.Request
  ): Promise<HttpResponse> {
    const problems = await this.dbLoadProblems.load({
      limit: request.limit ?? 50,
      skip: request.skip ?? 0,
      sortBy: request.sort_by ?? 'created_at',
      sortOrder: request.sort_order ?? 'asc',
      author: request.author,
      categoryId: request.category_id,
      id: request.id
    });

    if (problems.length) {
      return ok(request.id ? problems[0] : problems);
    }

    return noContent();
  }
}

export namespace ListProblemsController {
  export type Request = {
    id?: string;
    category_id?: string;
    author?: string;
    limit?: number;
    skip?: number;
    sort_by?: string;
    sort_order?: string;
  };
}
