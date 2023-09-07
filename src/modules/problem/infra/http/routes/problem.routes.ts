import { Router } from 'express';
import { container } from 'tsyringe';

import { ProblemController } from '@modules/problem/controllers';
import { makeAddProblemController } from '@modules/problem/factories';
import { adaptRoute } from '@shared/adapters';

const addProblemController = makeAddProblemController();
const problemController = container.resolve(ProblemController);

const problemRoutes = Router();

problemRoutes.post('/', adaptRoute(addProblemController));
problemRoutes.get('/', problemController.index);
problemRoutes.get('/:id', problemController.get);

export { problemRoutes };
