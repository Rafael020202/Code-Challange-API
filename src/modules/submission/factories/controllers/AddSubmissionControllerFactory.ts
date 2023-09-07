import { AddSubmissionController } from '@modules/submission/controllers';
import { makeDbAddSubmission } from '@modules/submission/factories';

export const makeAddSubmissionController = () => {
  const dbAddSubmission = makeDbAddSubmission();

  return new AddSubmissionController(dbAddSubmission);
};
