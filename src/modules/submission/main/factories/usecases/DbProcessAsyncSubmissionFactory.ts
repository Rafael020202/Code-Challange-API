import { DbProcessAsyncSubmission } from '@modules/submission/data/usecases';
import { Judge0Adapter } from '@modules/submission/infra/providers';
import { SubmissionMongoRepository } from '@modules/submission/infra/db/mongodb/repositories';

export const makeDbProcessAsyncSubmission = () => {
  const submissionMongoRepository = new SubmissionMongoRepository();
  const judge0Adapter = new Judge0Adapter();

  return new DbProcessAsyncSubmission(
    submissionMongoRepository,
    judge0Adapter,
  );
};
