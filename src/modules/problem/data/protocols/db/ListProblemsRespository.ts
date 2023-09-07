import { ListProblems } from '@modules/problem/domain/usecases';

export interface ListProblemsRespository {
  list(userId: string): Promise<ListProblemsRespository.Result>;
}

export namespace ListProblemsRespository {
  export type Result = ListProblems.Result;
}
