import { DbStartAsyncSubmission } from '@modules/submission/data/usecases';
import { Judge0Adapter, BeeQueueAdapter } from '@modules/submission/infra/providers';
import { ProblemMongoRepository } from '@modules/problem/infra/db/mongodb/repositories';

export const makeDbStartAsyncSubmission = () => {
  const problemMongoRepository = new ProblemMongoRepository();
  const judge0Adapter = new Judge0Adapter();
  const beeQueueAdapter = new BeeQueueAdapter();

  return new DbStartAsyncSubmission(
    problemMongoRepository,
    judge0Adapter,
    beeQueueAdapter
  );
};
