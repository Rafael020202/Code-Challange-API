import { LoadSubmissionById } from '@modules/submission/domain/usecases';

export interface LoadSubmissionByIdRepository {
  loadById(id: string): Promise<LoadSubmissionByIdRepository.Result>;
};

export namespace LoadSubmissionByIdRepository {
  export type Result = LoadSubmissionById.Result;
};