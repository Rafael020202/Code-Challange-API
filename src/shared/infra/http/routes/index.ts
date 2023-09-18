import { Router } from 'express';

import problemRoutes from '@modules/problem/main/routes';
import submissionRoutes from '@modules/submission/main/routes';
import authRoutes from '@modules/auth/main/routes';
import categoryRoutes from '@modules/category/main/routes';

import { adaptMiddleware } from '@shared/adapters';
import { makeAuthMiddleware } from '@modules/auth/main/factories';

const routes = Router();

routes.use('/oauth2', authRoutes);

routes.use(adaptMiddleware(makeAuthMiddleware()));

routes.use('/problem', problemRoutes);
routes.use('/submission', submissionRoutes);
routes.use('/category', categoryRoutes);

export default routes;
