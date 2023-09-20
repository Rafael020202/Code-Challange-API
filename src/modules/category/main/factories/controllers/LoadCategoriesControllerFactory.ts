import { makeDbLoadCategories } from '@modules/category/main/factories';
import { LoadCategoriesController } from '@modules/category/presentation'

export const makeLoadCategoriesController = () => {
  return new LoadCategoriesController(makeDbLoadCategories());
}