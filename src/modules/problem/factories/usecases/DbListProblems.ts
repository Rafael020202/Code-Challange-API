import { DbListProblems } from '@modules/problem/data/usecases';
import { ProblemRepository } from '@modules/problem/infra/database/mongodb/repositories';

export const makeDbListProblems = () => {
  const problemRepository = new ProblemRepository();

  return new DbListProblems(problemRepository);
};
