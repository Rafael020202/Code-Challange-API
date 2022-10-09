import { Router } from 'express';

import { SessionControler } from '@modules/users/controllers';

const sessionRoutes = Router();
const sessionController = new SessionControler();

sessionRoutes.post('/', sessionController.create);

export { sessionRoutes };
