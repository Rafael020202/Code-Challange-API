import { Problem } from '@modules/problem/domain/models';

export interface LoadProblems {
  load(params: LoadProblems.Params): Promise<LoadProblems.Result>;
}

export namespace LoadProblems {
  export type Params = {
    id?: string;
    categoryId?: string
    author?: string;
    sortBy: string;
    sortOrder: string;
    limit: number;
    skip: number;
  };

  export type Result = Problem[];
}
