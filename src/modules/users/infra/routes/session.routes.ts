import SessionController from '@modules/users/controllers/SessionController';
import { Router } from 'express';

const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.post('/', sessionController.create);

export default sessionRoutes;
