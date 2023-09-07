import { AddProblemController } from '@modules/problem/controllers';
import { makeDbAddProblem } from '@modules/problem/factories';

export const makeAddProblemController = () => {
  const dbAddProblem = makeDbAddProblem();

  return new AddProblemController(dbAddProblem);
};
