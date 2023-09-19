import { SearchProblems } from '@modules/problem/domain/usecases';

export interface LoadProblemsByFiltersRepository {
  loadByFilters(data: LoadProblemsByFiltersRepository.Params): Promise<LoadProblemsByFiltersRepository.Result>
};

export namespace LoadProblemsByFiltersRepository {
  export type Params = SearchProblems.Params;

  export type Result = SearchProblems.Result;
};
