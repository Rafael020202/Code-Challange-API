import { AddProblem } from '@modules/problem/domain/usecases';
import { AddProblemRepository } from '@modules/problem/data/protocols';
import { LoadCategoryByIdRepository } from '@modules/category/data/protocols';

export class DbAddProblem implements AddProblem {
  constructor(
    private addProblemRepository: AddProblemRepository,
    private loadCategoryByIdRepository: LoadCategoryByIdRepository
  ) {}

  public async add(data: AddProblem.Params): Promise<AddProblem.Result> {
    const category = await this.loadCategoryByIdRepository.loadById(
      data.category_id
    );

    if (category) {
      return this.addProblemRepository.add(data);
    }

    return null;
  }
}
