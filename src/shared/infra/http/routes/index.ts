import { Router } from 'express';

import ProblemRoutes from '@modules/problem/infra/http/routes/problem.routes';
import SubmissionRoutes from '@modules/submission/infra/http/submission.routes';
import usersRoutes from '@modules/users/infra/routes/user.routes';
import sessionsRoutes from '@modules/users/infra/routes/session.routes';
import rankingRoutes from '@modules/users/infra/routes/ranking.routes';

import isAuthenticated from '@shared/middlewares/isAuthenticated';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/session', sessionsRoutes);

routes.use(isAuthenticated);

routes.use('/problem', ProblemRoutes);
routes.use('/submission', SubmissionRoutes);
routes.use('/ranking', rankingRoutes);

export default routes;