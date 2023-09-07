import { ListProblems } from '@modules/problem/domain/usecases';
import { ListProblemsRespository } from '@modules/problem/data/protocols';

export class DbListProblems implements ListProblems {
  constructor(private listProblemsRespository: ListProblemsRespository) {}

  public async list(userId: string): Promise<ListProblems.Result> {
    return this.listProblemsRespository.list(userId);
  }
}
