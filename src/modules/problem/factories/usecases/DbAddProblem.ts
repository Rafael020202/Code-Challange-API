import { DbAddProblem } from '@modules/problem/data/usecases';
import { ProblemMongoRepository } from '@modules/problem/infra/db/mongodb/repositories';

export const makeDbAddProblem = () => {
  const problemMongoRepository = new ProblemMongoRepository();

  return new DbAddProblem(problemMongoRepository);
};
