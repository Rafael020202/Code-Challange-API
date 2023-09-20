import { Problem } from '@modules/problem/domain/models';

export interface ProcessAsyncSubmission {
  process(data: ProcessAsyncSubmission.Params): Promise<ProcessAsyncSubmission.Result>
};

export namespace ProcessAsyncSubmission {
  export type Params = {
    submission_id: string;
    problem_id: string;
    source_code: string;
    owner: string;
    submissions: {
      token: string;
      input: Problem['inputs'][0]
    }[];
  };

  export type Result = boolean;
};
