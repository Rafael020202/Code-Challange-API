import { Submission } from '@modules/submission/domain/models';

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
    owner: string;
    memory?: number;
    message?: string;
    time?: number;
    language: number;
  };
  export type Result = Submission;
}
