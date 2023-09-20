import { SchemaValidation } from '@shared/validation/validators';
import { JoiAdapter } from '@shared/infra/validators';
import { LoadProblemsController } from '@modules/problem/presentation/controllers';
import { makeDbLoadProblems } from '@modules/problem/main/factories';

export const makeLoadProblemsController = () => {
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
    author: {
      type: 'string',
      required: false
    },
    category_id: {
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

  const dbLoadProblems = makeDbLoadProblems();

  return new LoadProblemsController(dbLoadProblems, validation);
};
