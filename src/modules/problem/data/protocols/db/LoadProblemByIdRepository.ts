import { Problem } from '@modules/problem/domain/models';

export interface LoadProblemByIdRepository {
  loadById(id: string): Promise<LoadProblemByIdRepository.Result>;
}

export namespace LoadProblemByIdRepository {
  export type Result = Problem;
}
