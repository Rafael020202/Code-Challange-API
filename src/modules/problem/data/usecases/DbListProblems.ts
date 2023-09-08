import { ListProblems } from '@modules/problem/domain/usecases';
import { LoadProblemsByAuthorRepository } from '@modules/problem/data/protocols';

export class DbListProblems implements ListProblems {
  constructor(
    private loadProblemsByAuthorRepository: LoadProblemsByAuthorRepository
  ) {}

  public async list(author: string): Promise<ListProblems.Result> {
    return this.loadProblemsByAuthorRepository.loadByAuthor(author);
  }
}
