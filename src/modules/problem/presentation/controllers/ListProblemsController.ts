import { Controller, HttpResponse } from '@shared/protocols';
import { ok } from '@shared/helpers';
import { SearchProblems } from '@modules/problem/domain/usecases';

export class ListProblemsController implements Controller {
  constructor(private dbSearchProblems: SearchProblems) { }

  public async handle(
    request: ListProblemsController.Request
  ): Promise<HttpResponse> {

    const search = {
      filters: {}
    } as any;

    const filters = ['id', 'author', 'category_id'];
    const req = request as any;

    for (const filter of filters) {

      if (req[filter]) {
        search.filters[filter] = req[filter];
      }
    }

    search.sort = {
      field: request.sortBy ?? 'created_at',
      order: request.sortOrder ?? 'asc'
    };

    search.skip = request.skip ?? 0;

    search.limit = request.limit ?? 50;

    const result = await this.dbSearchProblems.search(search);

    return ok(result);
  }
}

export namespace ListProblemsController {
  export type Request = {
    id?: string;
    category_id?: string;
    author?: string;
    limit?: number;
    skip?: number;
    sortBy?: string;
    sortOrder?: string;
  };
}
