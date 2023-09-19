import { ListProblemsController } from '@modules/problem/presentation/controllers';
import { makeDbSearchProblems } from '@modules/problem/main/factories';

export const makeListProblemsController = () => {
  const dbSearchProblems = makeDbSearchProblems();

  return new ListProblemsController(dbSearchProblems);
};
