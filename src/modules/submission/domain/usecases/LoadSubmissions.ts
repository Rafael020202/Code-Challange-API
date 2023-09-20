import { Submission } from '@modules/submission/domain/models';

export interface LoadSubmissions {
  load(data: LoadSubmissions.Params): Promise<LoadSubmissions.Result>
}

export namespace LoadSubmissions {
  export type Params = {
    owner: string;
    sortBy: string;
    sortOrder: string;
    id?: string;
    limit?: number;
    skip?: number;
    problemId?: string;
  };

  export type Result = Submission[];
}
