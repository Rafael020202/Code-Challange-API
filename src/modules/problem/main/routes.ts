import { Router } from 'express';

import {
  makeAddProblemController,
  makeListProblemsController
} from '@modules/problem/main/factories';
import { adaptRoute } from '@shared/adapters';

const routes = Router();

routes.post('/', adaptRoute(makeAddProblemController()));
routes.get('/', adaptRoute(makeListProblemsController()));

export default routes;
