import Joi from 'joi';

import { SchemaValidator } from '@shared/validation/protocols';

export class JoiAdapter implements SchemaValidator {
  public validate(data: SchemaValidator.Params): SchemaValidator.Result {
    const { input, schema } = data;
    const fields = Object.keys(schema);
    const joiValidationObject = {} as any;

    for (const field of fields) {
      joiValidationObject[field] = Joi;

      if (schema[field].type) {
        joiValidationObject[field] = joiValidationObject[field][schema[field].type]();
      }

      if (schema[field].max) {
        joiValidationObject[field] = joiValidationObject[field].max(schema[field].max);
      }

      if (schema[field].required) {
        joiValidationObject[field] = joiValidationObject[field].required();
      }
    }

    const validationResult = Joi.object(joiValidationObject).validate(input, { abortEarly: true });

    if (validationResult.error) {
      return validationResult.error.message
    }

    return null;
  }
}
