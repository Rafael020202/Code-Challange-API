import { SchemaValidation } from '@shared/validation/validators';
import { JoiAdapter } from '@shared/infra/validators';
import { AddSubmissionController } from '@modules/submission/presentation/controllers';
import { makeDbAddSubmission } from '@modules/submission/main/factories';

export const makeAddSubmissionController = () => {
  const dbAddSubmission = makeDbAddSubmission();
  const joiAdapter = new JoiAdapter();
  const validation = new SchemaValidation(joiAdapter, {
    source_code: {
      type: 'string',
      required: true
    },
    problem_id: {
      type: 'string',
      required: true
    },
    account_id: {
      required: true
    }
  });

  return new AddSubmissionController(dbAddSubmission, validation);
};
