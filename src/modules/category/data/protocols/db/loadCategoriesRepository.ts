import { ListCategories } from '@modules/category/domain/usecases';

export interface LoadCategoriesRepository {
  load(data: LoadCategoriesRepository.Params): Promise<LoadCategoriesRepository.Result>
}

export namespace LoadCategoriesRepository {
  export type Params = ListCategories.Params;
  export type Result = ListCategories.Result;
}
