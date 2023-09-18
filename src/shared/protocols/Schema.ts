export interface Schema {
  [field: string]: {
    required?: boolean;
    max?: number;
    type?: 'string' | 'number' | 'array' | 'boolean';
    object?: Schema;
  }
}