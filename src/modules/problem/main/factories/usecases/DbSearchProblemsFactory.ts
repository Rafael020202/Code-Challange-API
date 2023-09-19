import { DbSearchProblems } from '@modules/problem/data/usecases';
import { ProblemMongoRepository } from '@modules/problem/infra/db/mongodb/repositories';

export const makeDbSearchProblems = () => {
  const problemMongoRepository = new ProblemMongoRepository();

  return new DbSearchProblems(problemMongoRepository);
};
