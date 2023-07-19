import { Router } from 'express';

import { problemRoutes } from '@modules/problem/infra/http/routes';
import { submissionRoutes } from '@modules/submission/infra/http/routes';
import { sessionRoutes, userRoutes } from '@modules/users/infra/http/routes';

import isAuthenticated from '@shared/middlewares/isAuthenticated';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/session', sessionRoutes);

routes.use(isAuthenticated);

routes.use('/problem', problemRoutes);
routes.use('/submission', submissionRoutes);

export default routes;
