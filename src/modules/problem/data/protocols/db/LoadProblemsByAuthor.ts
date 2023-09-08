import { ListProblems } from '@modules/problem/domain/usecases';

export interface LoadProblemsByAuthor {
  listByAuthor(author: string): Promise<LoadProblemsByAuthor.Result>;
}

export namespace LoadProblemsByAuthor {
  export type Result = ListProblems.Result;
}
