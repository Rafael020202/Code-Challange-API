import { SchemaValidation } from '@shared/validation/validators';
import { JoiAdapter } from '@shared/infra/validators';
import { LoadSubmissionsController } from '@modules/submission/presentation/controllers';
import { makeDbLoadSubmissions } from '@modules/submission/main/factories';

export const makeLoadSubmissionsController = () => {
  const dbLoadSubmissions = makeDbLoadSubmissions();
  const joiAdapter = new JoiAdapter();
  const validation = new SchemaValidation(joiAdapter, {
    account_id: {
      type: 'string',
      required: false
    },
    id: {
      type: 'string',
      required: false
    },
    problem_id: {
      type: 'string',
      required: false
    },
    sort_by: {
      type: 'string',
      required: false
    },
    sort_order: {
      type: 'string',
      required: false
    },
    limit: {
      type: 'number',
      required: false
    },
    skip: {
      type: 'number',
      required: false
    }
  });

  return new LoadSubmissionsController(dbLoadSubmissions, validation);
}
