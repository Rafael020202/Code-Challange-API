import { LoadProblemsController } from '@modules/problem/presentation/controllers';
import { makeDbLoadProblems } from '@modules/problem/main/factories';

export const makeLoadProblemsController = () => {
  const dbLoadProblems = makeDbLoadProblems();

  return new LoadProblemsController(dbLoadProblems);
};
