import { Router } from 'express';
import { container } from 'tsyringe';

import { ProblemController } from '@modules/problem/controllers';

const problemController = container.resolve(ProblemController);
const problemRoutes = Router();

problemRoutes.post('/', problemController.create);
problemRoutes.get('/', problemController.index);
problemRoutes.get('/:id', problemController.get);

export { problemRoutes };
