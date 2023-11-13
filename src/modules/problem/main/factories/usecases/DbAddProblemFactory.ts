import { DbAddProblem } from '@modules/problem/data/usecases';
import { ProblemMongoRepository } from '@modules/problem/infra/db';
import { CategoryMongoRepository } from '@modules/category/infra/db';

export const makeDbAddProblem = () => {
  const problemMongoRepository = new ProblemMongoRepository();
  const categoryMongoRepository = new CategoryMongoRepository();

  return new DbAddProblem(problemMongoRepository, categoryMongoRepository);
};
