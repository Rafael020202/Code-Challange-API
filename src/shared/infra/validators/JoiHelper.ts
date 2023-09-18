import Joi from 'joi'

import { Schema } from '@shared/protocols';

type ValueOf<T> = T[keyof T];

export const JoiHelper = {
  schemaMap(schema: ValueOf<Schema>) {
    let map = Joi as any;

    if (schema.type) {
      map = map[schema.type]();
    }

    if (schema.required) {
      map = map.required();
    }

    if (schema.max) {
      map = map.max(schema.max);
    }

    return map;
  }
};
