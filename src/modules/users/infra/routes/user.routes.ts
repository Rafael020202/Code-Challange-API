import UserController from '@modules/users/controllers/UserController';
import { Router } from 'express';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);

export default userRoutes;