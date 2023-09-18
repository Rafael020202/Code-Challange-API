import { ListCategories } from '@modules/category/domain/usecases';
import { LoadCategoriesRepository } from '@modules/category/data/protocols';


export class DbListCategories implements ListCategories {
  constructor(private loadCategoriesRepository: LoadCategoriesRepository) { }

  public async list(data: ListCategories.Params): Promise<ListCategories.Result> {
    return this.loadCategoriesRepository.load(data);
  }
}