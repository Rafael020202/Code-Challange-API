import { Router } from 'express';

import ProblemRoutes from '@modules/problem/infra/http/routes/problem.routes';
import SubmissionRoutes from '@modules/submission/infra/http/submission.routes';
import { sessionRoutes, userRoutes } from '@modules/users/infra/routes';

import isAuthenticated from '@shared/middlewares/isAuthenticated';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/session', sessionRoutes);

routes.use(isAuthenticated);

routes.use('/problem', ProblemRoutes);
routes.use('/submission', SubmissionRoutes);

export default routes;
