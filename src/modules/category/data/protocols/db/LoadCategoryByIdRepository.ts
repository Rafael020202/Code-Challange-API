import { Category } from '@modules/category/domain/models';

export interface LoadCategoryByIdRepository {
  loadById(id: number): Promise<LoadCategoryByIdRepository.Result>;
}

export namespace LoadCategoryByIdRepository {
  export type Result = Category;
}
