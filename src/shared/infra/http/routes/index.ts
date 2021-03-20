import { Router } from 'express';
import ProblemRoutes from '@modules/problem/infra/http/routes/problem.routes';

const routes = Router();

routes.use('/problem', ProblemRoutes);

export default routes;