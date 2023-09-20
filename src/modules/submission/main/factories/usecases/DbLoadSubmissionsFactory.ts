import { DbLoadSubmissions } from '@modules/submission/data/usecases';
import { SubmissionMongoRepository } from '@modules/submission/infra/db';

export const makeDbLoadSubmissions = () => {
  const submissionMongoRepository = new SubmissionMongoRepository();

  return new DbLoadSubmissions(submissionMongoRepository);
}
