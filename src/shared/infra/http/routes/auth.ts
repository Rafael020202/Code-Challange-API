import { Router } from 'express';

import authRoutes from '@modules/auth/main/routes';

const router = Router();

router.use('/oauth2', authRoutes);

export default router;
