import { ListProblems } from '@modules/problem/domain/usecases';
import { LoadProblemsByAuthor } from '@modules/problem/data/protocols';

export class DbListProblems implements ListProblems {
  constructor(private listProblemsRespository: LoadProblemsByAuthor) {}

  public async list(author: string): Promise<ListProblems.Result> {
    return this.listProblemsRespository.loadByAuthor(author);
  }
}
