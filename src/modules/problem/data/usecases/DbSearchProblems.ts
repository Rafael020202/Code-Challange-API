import { SearchProblems } from '@modules/problem/domain/usecases';
import { LoadProblemsByFiltersRepository } from '@modules/problem/data/protocols';

export class DbSearchProblems implements SearchProblems {
  constructor(
    private loadProblemsByFiltersRepository: LoadProblemsByFiltersRepository
  ) { }

  public async search(data: SearchProblems.Params): Promise<SearchProblems.Result> {
    return this.loadProblemsByFiltersRepository.loadByFilters(data);
  }
}
