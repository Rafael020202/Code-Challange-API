import { DbAddSubmission } from '@modules/submission/data/usecases';
import { BeeQueueAdapter } from '@modules/submission/infra/providers';
import { SubmissionMongoRepository } from '@modules/submission/infra/db/mongodb/repositories';

export const makeDbAddSubmission = () => {
  const submissionMongoRepository = new SubmissionMongoRepository();
  const beeQueueAdapter = new BeeQueueAdapter();

  return new DbAddSubmission(
    submissionMongoRepository,
    beeQueueAdapter
  );
};
