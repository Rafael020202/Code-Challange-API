import { Router } from 'express';

import problemRoutes from '@modules/problem/main/routes';
import submissionRoutes from '@modules/submission/main/routes';
import categoryRoutes from '@modules/category/main/routes';
import { makeAuthMiddleware } from '@modules/auth/main/factories';
import { adaptMiddleware } from '@shared/adapters';

const router = Router();

router.use(adaptMiddleware(makeAuthMiddleware()));

router.use('/problem', problemRoutes);
router.use('/submission', submissionRoutes);
router.use('/category', categoryRoutes);

export default router;
