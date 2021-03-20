import ProblemController from '@modules/problem/controllers/ProblemController';
import { Router } from 'express';

const problemController = new ProblemController();
const problemRoutes = Router();

problemRoutes.post('/', problemController.create);
problemRoutes.get('/', problemController.index);

export default problemRoutes;