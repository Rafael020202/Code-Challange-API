import { Router } from 'express';
import { container } from 'tsyringe';

import { ProblemController } from '@modules/problem/controllers';
import {
  makeAddProblemController,
  makeListProblemsController
} from '@modules/problem/factories';
import { adaptRoute } from '@shared/adapters';

const addProblemController = makeAddProblemController();
const listProblemsFactory = makeListProblemsController();
const problemController = container.resolve(ProblemController);

const problemRoutes = Router();

problemRoutes.post('/', adaptRoute(addProblemController));
problemRoutes.get('/', adaptRoute(listProblemsFactory));
problemRoutes.get('/:id', problemController.get);

export { problemRoutes };
