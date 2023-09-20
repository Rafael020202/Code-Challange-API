import { Submission } from '@modules/submission/domain/models';

export interface LoadSubmissionById {
  loadById(id: string): Promise<LoadSubmissionById.Result>;
};

export namespace LoadSubmissionById {
  export type Result = Submission;
};
