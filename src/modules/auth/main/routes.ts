import { Router } from 'express';

import { adaptRoute } from '@shared/adapters';
import { makeAuthController } from '@modules/auth/main/factories';

const routes = Router();

routes.post('/token', adaptRoute(makeAuthController()));

export default routes;
