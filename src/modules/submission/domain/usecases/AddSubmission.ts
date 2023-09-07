import { Submission } from '@modules/submission/domain/models';

export interface AddSubmission {
  add(data: AddSubmission.Params): Promise<AddSubmission.Result>;
}

export namespace AddSubmission {
  export type Params = {
    problem_id: string;
    source_code: string;
    user_id: number;
  };

  export type Result = Submission;
}
