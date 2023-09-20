import { LoadCategories } from '@modules/category/domain/usecases';

export interface LoadCategoriesRepository {
  loadAll(): Promise<LoadCategoriesRepository.Result>
}

export namespace LoadCategoriesRepository {
  export type Result = LoadCategories.Result;
}
