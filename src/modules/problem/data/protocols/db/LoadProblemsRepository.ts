import { LoadProblems } from '@modules/problem/domain/usecases';

export interface LoadProblemsRepository {
  loadAll(data: LoadProblemsRepository.Params): Promise<LoadProblemsRepository.Result>
};

export namespace LoadProblemsRepository {
  export type Params = LoadProblems.Params;

  export type Result = LoadProblems.Result;
};
