import Joi from 'joi';

import { SchemaValidator } from '@shared/validation/protocols';
import { JoiHelper } from './';

export class JoiAdapter implements SchemaValidator {
  public validate(data: SchemaValidator.Params): SchemaValidator.Result {
    const { input, schema } = data;
    const fields = Object.keys(schema);
    const joiValidationObject = {} as any;

    for (const field of fields) {
      if (schema[field].type === 'array') {
        const items = {} as any;

        for (const key in schema[field].object) {
          items[key] = JoiHelper.schemaMap(schema[field].object[key]);
        }

        joiValidationObject[field] = Joi.array().items(items);
      } else {
        joiValidationObject[field] = JoiHelper.schemaMap(schema[field]);
      }
    }

    const validationResult = Joi.object(joiValidationObject).validate(input, { abortEarly: true });

    if (validationResult.error) {
      return validationResult.error.message
    }

    return null;
  }
}
