import { Problem } from '@modules/problem/domain/models';

export interface ListProblems {
  list(author: string): Promise<ListProblems.Result>;
}

export namespace ListProblems {
  export type Result = Problem[];
}
