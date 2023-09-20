import { LoadSubmissionsController } from '@modules/submission/presentation/controllers';
import { makeDbLoadSubmissions } from '@modules/submission/main/factories';

export const makeLoadSubmissionsController = () => {
  const dbLoadSubmissions = makeDbLoadSubmissions();

  return new LoadSubmissionsController(dbLoadSubmissions);
}
