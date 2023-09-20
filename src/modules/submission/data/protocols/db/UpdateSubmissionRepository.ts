export interface UpdateSubmissionRespository {
  update(
    data: UpdateSubmissionRespository.Params
  ): Promise<UpdateSubmissionRespository.Result>;
}

export namespace UpdateSubmissionRespository {
  export type Params = {
    submission_id: string;
    status?: string;
    problem_id?: string;
    source_code?: string;
    owner?: string;
    memory?: number;
    message?: string;
    time?: number;
  };
  export type Result = boolean;
}
