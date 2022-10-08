import * as uuid from 'uuid';
import MongoDb from '@shared/infra/database/mongodb';
import IProblemRepository from '@modules/problem/repositories/IProblemRepository';
import Problem from '@modules/problem/infra/database/mongodb/entities/Problem';
import IProblemDTO from '@modules/problem/dtos/IProblemDTO';

export default class ProblemRepository implements IProblemRepository {
  private repository = MongoDb.getCollection('problems');

  public async create(data: IProblemDTO): Promise<Problem> {
    await this.repository.insertOne({
      problem_id: uuid.v4(),
      ...data
    });

    return new Problem({});
  }

  public async getAll(user_id: number): Promise<Problem[]> {
    const result = await this.repository.find({ user_id });
    const problems = result.map((value) => new Problem(value));

    return problems.toArray();
  }

  public async getById(id: number): Promise<Problem> {
    const problem = await this.repository.findOne({ problem_id: id });

    return new Problem(problem);
  }

  public async getByCategory(category_id: number): Promise<Problem[]> {
    const result = await this.repository.find({ category_id });
    const problems = result.map((value) => new Problem(value));

    return problems.toArray();
  }
}
