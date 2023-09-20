import { LoadSubmissionByIdController } from '@modules/submission/presentation/controllers';
import { makeDbLoadSubmissionById } from '@modules/submission/main/factories';

export const makeLoadSubmissionByIdController = () => {
  const dbLoadSubmissionById = makeDbLoadSubmissionById();

  return new LoadSubmissionByIdController(dbLoadSubmissionById);
}
