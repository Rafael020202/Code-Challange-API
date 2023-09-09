import { AddProblem } from '@modules/problem/domain/usecases';
import { AddProblemRepository } from '@modules/problem/data/protocols';

export class DbAddProblem implements AddProblem {
  constructor(private addProblemRepository: AddProblemRepository) {}

  public async add(data: AddProblem.Params): Promise<AddProblem.Result> {
    const inserted = await this.addProblemRepository.add(data);

    return inserted;
  }
}
