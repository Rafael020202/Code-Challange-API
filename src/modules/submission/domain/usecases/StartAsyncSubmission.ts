export interface StartAsyncSubmission {
  start(data: StartAsyncSubmission.Params): Promise<StartAsyncSubmission.Result>
};

export namespace StartAsyncSubmission {
  export type Params = {
    problem_id: string;
    submission_id: string;
    source_code: string;
    owner: string;
    language: number;
  };

  export type Result = boolean;
};
