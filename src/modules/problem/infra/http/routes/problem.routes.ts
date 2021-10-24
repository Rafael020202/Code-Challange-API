import ProblemController from '@modules/problem/controllers/ProblemController';
import { Router } from 'express';
import { container } from 'tsyringe';

const problemController = container.resolve(ProblemController);
const problemRoutes = Router();

problemRoutes.post('/', problemController.create);
problemRoutes.get('/index/:category_id', problemController.index);
problemRoutes.get('/:id', problemController.get);

export default problemRoutes;