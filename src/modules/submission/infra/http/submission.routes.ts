import SubmissionController from '@modules/submission/controllers/SubmissionController';
import { Router } from 'express';

const submissionController = new SubmissionController();
const submissionRoutes = Router();

submissionRoutes.post('/', submissionController.create);
submissionRoutes.get('/', submissionController.index);
submissionRoutes.get('/:id', submissionController.get);


export default submissionRoutes;