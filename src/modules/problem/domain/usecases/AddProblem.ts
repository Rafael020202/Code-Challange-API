import { Problem } from '@modules/problem/domain/models';

export interface AddProblem {
  add(data: AddProblem.Params): Promise<AddProblem.Result>;
}

export namespace AddProblem {
  export type Params = {
    title: string;
    description: string;
    input_description: string;
    output_description: string;
    memory_limit: number;
    timeout: number;
    category_id: number;
    author: string;
    level: number;
    inputs: {
      value: string;
      output: string;
      is_example: boolean;
    }[];
  };

  export type Result = Problem;
}
