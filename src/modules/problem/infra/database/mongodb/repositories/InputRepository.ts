import * as uuid from 'uuid';
import MongoDb from '@shared/infra/database/mongodb';
import IInputRepository from '@modules/problem/repositories/IInputRepository';
import IInputDTO from '@modules/problem/dtos/IInputDTO';
import Input from '@modules/problem/infra/database/mongodb/entities/Input';

export default class InputRepository implements IInputRepository {
  private repository = MongoDb.getCollection('inputs');

  public async create(data: IInputDTO): Promise<Input> {
    await this.repository.insertOne({
      input_id: uuid.v4(),
      ...data
    });

    return new Input({});
  }

  public async getExamples(problem_id: number): Promise<Input[]> {
    const result = await this.repository.find({ problem_id, is_example: true });
    const inputs = result.map((value) => new Input(value));

    return inputs.toArray();
  }

  public async getByProblemId(problem_id: number): Promise<Input[]> {
    const result = await this.repository.find({ problem_id });
    const inputs = result.map((value) => new Input(value));

    return inputs.toArray();
  }
}
