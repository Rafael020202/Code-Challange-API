import { DbListCategories } from '@modules/category/data/usecases';
import { CategoryMongoRepository } from '@modules/category/infra/db';

export const makeDbListCategories = () => {
  const categoryMongoRepository = new CategoryMongoRepository();

  return new DbListCategories(categoryMongoRepository);
}
