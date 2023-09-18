import { Controller, HttpResponse } from '@shared/protocols';
import { ok } from '@shared/helpers'
import { ListCategories } from '@modules/category/domain/usecases';

export class ListCategoriesController implements Controller {
  constructor(private dbListCategories: ListCategories) { }

  public async handle(request: ListCategoriesController.Request): Promise<HttpResponse> {
    const listResult = await this.dbListCategories.list(request);

    return ok(listResult);
  }
}

export namespace ListCategoriesController {
  export type Request = {
    filters?: any;
    limit?: number;
    skip?: number;
    sort?: {
      field: string;
      order: 'asc' | 'desc';
    };
  };
}
