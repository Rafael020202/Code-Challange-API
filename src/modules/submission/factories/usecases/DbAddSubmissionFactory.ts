import { DbAddSubmission } from '@modules/submission/data/usecases';
import { Judge0Adapter } from '@modules/submission/infra/providers';
import { SubmissionMongoRepository } from '@modules/submission/infra/db/mongodb/repositories';
import { ProblemMongoRepository } from '@modules/problem/infra/db/mongodb/repositories';

export const makeDbAddSubmission = () => {
  const submissionMongoRepository = new SubmissionMongoRepository();
  const problemMongoRepository = new ProblemMongoRepository();
  const judge0Adapter = new Judge0Adapter();

  return new DbAddSubmission(
    problemMongoRepository,
    submissionMongoRepository,
    judge0Adapter,
    judge0Adapter
  );
};
