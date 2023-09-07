import { AddSubmissionController } from '@modules/submission/controllers';
import { makeDbAddSubmission } from '@modules/submission/main/factories';

export const makeAddSubmissionController = () => {
  const dbAddSubmission = makeDbAddSubmission();

  return new AddSubmissionController(dbAddSubmission);
};
