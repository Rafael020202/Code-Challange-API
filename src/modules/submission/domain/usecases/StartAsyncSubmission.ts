import { Submission } from '@modules/submission/domain/models';

export interface StartAsyncSubmission {
  start(data: StartAsyncSubmission.Params): Promise<StartAsyncSubmission.Result>
};

export namespace StartAsyncSubmission {
  export type Params = {
    problem_id: string;
    submission_id: string;
    source_code: string;
    owner: string;
  };

  export type Result = boolean;
};
