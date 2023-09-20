import { Router } from 'express';

import {
  makeAddProblemController,
  makeLoadProblemsController
} from '@modules/problem/main/factories';
import { adaptRoute } from '@shared/adapters';

const routes = Router();

routes.post('/', adaptRoute(makeAddProblemController()));
routes.get('/', adaptRoute(makeLoadProblemsController()));
routes.get('/:id', adaptRoute(makeLoadProblemsController()));

export default routes;
