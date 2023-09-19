import { Problem } from '@modules/problem/domain/models';
import { QueryList } from '@shared/protocols';

export interface SearchProblems {
  search(params: SearchProblems.Params): Promise<SearchProblems.Result>;
}

export namespace SearchProblems {
  export type Params = QueryList;

  export type Result = Problem[];
}
