import { adaptRoute } from '@shared/adapters';
import {
  makeAddSubmissionController,
  makeLoadSubmissionsController
} from '@modules/submission/main/factories';
import { Router } from 'express';

const submissionRoutes = Router();

submissionRoutes.post('/', adaptRoute(makeAddSubmissionController()));
submissionRoutes.get('/:id', adaptRoute(makeLoadSubmissionsController()));
submissionRoutes.get('/', adaptRoute(makeLoadSubmissionsController()));

export default submissionRoutes;
