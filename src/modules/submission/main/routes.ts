import { adaptRoute } from '@shared/adapters';
import { makeAddSubmissionController, makeLoadSubmissionByIdController } from '@modules/submission/main/factories';
import { Router } from 'express';

const submissionRoutes = Router();

submissionRoutes.post('/', adaptRoute(makeAddSubmissionController()));
submissionRoutes.get('/:id', adaptRoute(makeLoadSubmissionByIdController()));

export default submissionRoutes;
