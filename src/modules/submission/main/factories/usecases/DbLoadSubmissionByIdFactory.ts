import { DbLoadSubmissionById } from '@modules/submission/data/usecases';
import { SubmissionMongoRepository } from '@modules/submission/infra/db';

export const makeDbLoadSubmissionById = () => {
  const submissionMongoRepository = new SubmissionMongoRepository();

  return new DbLoadSubmissionById(submissionMongoRepository);
}
