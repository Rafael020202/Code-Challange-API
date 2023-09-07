import { DbListProblems } from '@modules/problem/data/usecases';
import { ProblemMongoRepository } from '@modules/problem/infra/db/mongodb/repositories';

export const makeDbListProblems = () => {
  const problemMongoRepository = new ProblemMongoRepository();

  return new DbListProblems(problemMongoRepository);
};
