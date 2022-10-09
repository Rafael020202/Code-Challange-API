import { Router } from 'express';

import ProblemRoutes from '@modules/problem/infra/http/routes/problem.routes';
import { submissionRoutes } from '@modules/submission/infra/http';
import { sessionRoutes, userRoutes } from '@modules/users/infra/routes';

import isAuthenticated from '@shared/middlewares/isAuthenticated';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/session', sessionRoutes);

routes.use(isAuthenticated);

routes.use('/problem', ProblemRoutes);
routes.use('/submission', submissionRoutes);

export default routes;
