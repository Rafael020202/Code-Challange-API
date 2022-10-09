import { Router } from 'express';

import { UserController } from '@modules/users/controllers';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);

export { userRoutes };
