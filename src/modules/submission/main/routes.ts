import { adaptRoute } from '@shared/adapters';
import { makeAddSubmissionController } from '@modules/submission/main/factories';
import { Router } from 'express';

const submissionRoutes = Router();

submissionRoutes.post('/', adaptRoute(makeAddSubmissionController()));

export default submissionRoutes;
