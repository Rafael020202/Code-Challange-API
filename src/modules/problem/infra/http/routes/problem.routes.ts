import { Router } from 'express';

import {
  makeAddProblemController,
  makeListProblemsController
} from '@modules/problem/factories';
import { adaptRoute } from '@shared/adapters';

const addProblemController = makeAddProblemController();
const listProblemsFactory = makeListProblemsController();

const problemRoutes = Router();

problemRoutes.post('/', adaptRoute(addProblemController));
problemRoutes.get('/', adaptRoute(listProblemsFactory));

export { problemRoutes };
