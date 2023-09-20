import { Submission } from '@modules/submission/domain/models';

export interface AddSubmission {
  add(data: AddSubmission.Params): Promise<AddSubmission.Result>;
}

export namespace AddSubmission {
  export type Params = {
    problem_id: string;
    source_code: string;
    owner: string;
  };

  export type Result = string;
}
