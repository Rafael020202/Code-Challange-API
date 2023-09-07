import { AddProblemController } from '@modules/problem/controllers';
import { CreateProblemService } from '@modules/problem/services';
import { ProblemRepository } from '@modules/problem/infra/database/mongodb/repositories';

export const makeAddProblemController = () => {
  const problemRepository = new ProblemRepository();
  const createProblemService = new CreateProblemService(problemRepository);

  return new AddProblemController(createProblemService);
};
