import { Controller, HttpResponse } from '@shared/protocols';
import { ok } from '@shared/helpers'
import { LoadCategories } from '@modules/category/domain/usecases';

export class LoadCategoriesController implements Controller {
  constructor(private dbLoadCategories: LoadCategories) { }

  public async handle(): Promise<HttpResponse> {
    const listResult = await this.dbLoadCategories.load();

    return ok(listResult);
  }
}
