import { SubmissionController } from '@modules/submission/controllers';
import { Router } from 'express';

const submissionController = new SubmissionController();
const submissionRoutes = Router();

submissionRoutes.post('/', submissionController.create);
submissionRoutes.get('/', submissionController.index);
submissionRoutes.get('/:id', submissionController.get);

export { submissionRoutes };
