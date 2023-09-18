import { makeDbListCategories } from '@modules/category/main/factories';
import { ListCategoriesController } from '@modules/category/presentation'

export const makeListCategoriesController = () => {
  return new ListCategoriesController(makeDbListCategories());
}