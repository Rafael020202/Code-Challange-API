import { LoadSubmissions } from '@modules/submission/domain/usecases';

export interface LoadSubmissionsRepositoy {
  loadAll(data: LoadSubmissionsRepositoy.Params): Promise<LoadSubmissionsRepositoy.Result>;
}

export namespace LoadSubmissionsRepositoy {
  export type Params = LoadSubmissions.Params;

  export type Result = LoadSubmissions.Result;
};
