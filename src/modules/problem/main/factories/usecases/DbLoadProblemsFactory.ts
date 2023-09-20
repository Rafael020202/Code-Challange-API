import { DbLoadProblems } from '@modules/problem/data/usecases';
import { ProblemMongoRepository } from '@modules/problem/infra/db/mongodb/repositories';

export const makeDbLoadProblems = () => {
  const problemMongoRepository = new ProblemMongoRepository();

  return new DbLoadProblems(problemMongoRepository);
};
