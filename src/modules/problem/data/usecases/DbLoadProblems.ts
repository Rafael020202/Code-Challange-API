import { LoadProblems } from '@modules/problem/domain/usecases';
import { LoadProblemsRepository } from '@modules/problem/data/protocols';

export class DbLoadProblems implements LoadProblems {
  constructor(
    private loadProblemsRepository: LoadProblemsRepository
  ) { }

  public async load(data: LoadProblems.Params): Promise<LoadProblems.Result> {
    return this.loadProblemsRepository.loadAll(data);
  }
}
