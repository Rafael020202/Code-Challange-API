import { adaptRoute } from '@shared/adapters';
import { makeAddSubmissionController } from '@modules/submission/factories';
import { Router } from 'express';

const submissionRoutes = Router();

submissionRoutes.post('/', adaptRoute(makeAddSubmissionController()));

export { submissionRoutes };
