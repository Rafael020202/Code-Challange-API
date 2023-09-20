import { LoadSubmissions } from '@modules/submission/domain/usecases';
import { LoadSubmissionsRepositoy } from '@modules/submission/data/protocols';

export class DbLoadSubmissions implements LoadSubmissions {
  constructor(private loadSubmissionsRepository: LoadSubmissionsRepositoy) { }

  public async load(data: LoadSubmissions.Params): Promise<LoadSubmissions.Result> {
    return this.loadSubmissionsRepository.loadAll(data);
  }
}
