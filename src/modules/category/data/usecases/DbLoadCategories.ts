import { LoadCategories } from '@modules/category/domain/usecases';
import { LoadCategoriesRepository } from '@modules/category/data/protocols';


export class DbLoadCategories implements LoadCategories {
  constructor(private loadCategoriesRepository: LoadCategoriesRepository) { }

  public async load(): Promise<LoadCategories.Result> {
    return this.loadCategoriesRepository.loadAll();
  }
}