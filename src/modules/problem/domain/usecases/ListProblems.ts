import { Problem } from '@modules/problem/models';

export interface ListProblems {
  add(data: ListProblems.Params): Promise<ListProblems.Result>;
}

export namespace ListProblems {
  export type Params = {
    user_id: string;
  };

  export type Result = Problem[];
}
