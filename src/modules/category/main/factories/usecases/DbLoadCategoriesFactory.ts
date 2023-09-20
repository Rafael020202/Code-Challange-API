import { DbLoadCategories } from '@modules/category/data/usecases';
import { CategoryMongoRepository } from '@modules/category/infra/db';

export const makeDbLoadCategories = () => {
  const categoryMongoRepository = new CategoryMongoRepository();

  return new DbLoadCategories(categoryMongoRepository);
}
