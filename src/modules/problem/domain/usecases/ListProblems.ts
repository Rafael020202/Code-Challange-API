import { Problem } from '@modules/problem/models';

export interface ListProblems {
  list(userId: string): Promise<ListProblems.Result>;
}

export namespace ListProblems {
  export type Result = Problem[];
}
