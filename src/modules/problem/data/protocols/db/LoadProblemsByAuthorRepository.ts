import { ListProblems } from '@modules/problem/domain/usecases';

export interface LoadProblemsByAuthorRepository {
  loadByAuthor(author: string): Promise<LoadProblemsByAuthorRepository.Result>;
}

export namespace LoadProblemsByAuthorRepository {
  export type Result = ListProblems.Result;
}
