import { DbAddProblem } from '@modules/problem/data/usecases';
import { ProblemRepository } from '@modules/problem/infra/database/mongodb/repositories';

export const makeDbAddProblem = () => {
  const problemRepository = new ProblemRepository();

  return new DbAddProblem(problemRepository);
};
