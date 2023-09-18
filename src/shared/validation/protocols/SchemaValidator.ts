import { Schema } from '@shared/protocols';

export interface SchemaValidator {
  validate(data: SchemaValidator.Params): SchemaValidator.Result;
}

export namespace SchemaValidator {
  export type Params = {
    input: any;
    schema: Schema;
  };

  export type Result = string;
}