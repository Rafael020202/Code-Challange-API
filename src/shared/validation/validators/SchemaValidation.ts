import { Validation, Schema } from '@shared/protocols';
import { SchemaValidator } from '@shared/validation/protocols';
import { InvalidParamError } from '@shared/errors';

export class SchemaValidation implements Validation {
  constructor(private schemaValidator: SchemaValidator, private shema: Schema) { }

  public validate(input: any): Error {
    const error = this.schemaValidator.validate({ input, schema: this.shema });

    if (error) {
      return new InvalidParamError(error);
    }

    return null;
  }
};
