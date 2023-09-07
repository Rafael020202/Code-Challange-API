import { ListProblemsController } from '@modules/problem/controllers';
import { ListProblemService } from '@modules/problem/services';
import { ProblemRepository } from '@modules/problem/infra/database/mongodb/repositories';

export const makeListProblemsController = () => {
  const problemRepository = new ProblemRepository();
  const listProblemService = new ListProblemService(problemRepository);

  return new ListProblemsController(listProblemService);
};
