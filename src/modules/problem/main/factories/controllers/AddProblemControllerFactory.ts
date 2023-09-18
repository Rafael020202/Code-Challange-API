import { AddProblemController } from '@modules/problem/presentation/controllers';
import { makeDbAddProblem } from '@modules/problem/main/factories';
import { SchemaValidation } from '@shared/validation/validators';
import { JoiAdapter } from '@shared/infra/validators';

export const makeAddProblemController = () => {
  const dbAddProblem = makeDbAddProblem();
  const joiAdapter = new JoiAdapter();
  const schemaValidaton = new SchemaValidation(joiAdapter, {
    title: {
      required: true,
      max: 30,
      type: 'string'
    },
    description: {
      required: true,
      type: 'string'
    },
    input_description: {
      required: true,
      type: 'string'
    },
    output_description: {
      required: true,
      type: 'string'
    },
    memory_limit: {
      required: true,
      type: 'number'
    },
    timeout: {
      required: true,
      type: 'number'
    },
    category_id: {
      required: true,
      type: 'number'
    },
    account_id: {
      required: true,
      type: 'string'
    },
    inputs: {
      required: true
    }
  });

  return new AddProblemController(dbAddProblem, schemaValidaton);
};
