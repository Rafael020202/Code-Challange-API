import { Router } from 'express';

import ProblemRoutes from '@modules/problem/infra/http/routes/problem.routes';
import SubmissionRoutes from '@modules/submission/infra/http/submission.routes';
import usersRoutes from '@modules/users/infra/routes/user.routes';
import sessionsRoutes from '@modules/users/infra/routes/session.routes';

import isAuthenticated from '@shared/middlewares/isAuthenticated';

const routes = Router();

routes.use('/Users', usersRoutes);
routes.use('/Session', sessionsRoutes);

routes.use(isAuthenticated);

routes.use('/problem', ProblemRoutes);
routes.use('/submission', SubmissionRoutes);

export default routes;