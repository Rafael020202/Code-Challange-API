import { AddProblemController } from '@modules/problem/presentation/controllers';
import { makeDbAddProblem } from '@modules/problem/main/factories';

export const makeAddProblemController = () => {
  const dbAddProblem = makeDbAddProblem();

  return new AddProblemController(dbAddProblem);
};
