import { ListProblemsController } from '@modules/problem/controllers';
import { makeDbListProblems } from '@modules/problem/main/factories';

export const makeListProblemsController = () => {
  const dbListProblems = makeDbListProblems();

  return new ListProblemsController(dbListProblems);
};
