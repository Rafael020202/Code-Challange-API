import SubmissionController from '@modules/submission/controllers/SubmissionController';
import { Router } from 'express';

const submissionController = new SubmissionController();
const submissionRoutes = Router();

submissionRoutes.post('/', submissionController.create);

export default submissionRoutes;