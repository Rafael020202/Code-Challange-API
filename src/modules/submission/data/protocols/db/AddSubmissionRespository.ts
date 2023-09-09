import { AddSubmission } from '@modules/submission/domain/usecases';

export interface AddSubmissionRespository {
  add(
    data: AddSubmissionRespository.Params
  ): Promise<AddSubmissionRespository.Result>;
}

export namespace AddSubmissionRespository {
  export type Params = {
    status: string;
    problem_id: string;
    source_code: string;
    owner: number;
    memory: number;
    message: string;
    time: number;
  };
  export type Result = AddSubmission.Result;
}
