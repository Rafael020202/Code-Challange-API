import * as uuid from 'uuid';
import MongoDb from '@shared/infra/database/mongodb';

import { Problem } from '@modules/problem/models';
import { IProblemRepository } from '@modules/problem/repositories';
import { ICreateProblemDTO } from '@modules/problem/dtos';

export class ProblemRepository implements IProblemRepository {
  public async create(data: ICreateProblemDTO): Promise<Problem> {
    const repository = MongoDb.getCollection('problems');
    const problem = {
      problem_id: uuid.v4(),
      ...data
    };

    await repository.insertOne(problem);

    return problem as any;
  }

  public async getAll(user_id: string): Promise<Problem[]> {
    const repository = MongoDb.getCollection('problems');
    const result = await repository.find({ user_id }).toArray();

    return result as any;
  }

  public async getById(id: string): Promise<Problem> {
    const repository = MongoDb.getCollection('problems');
    const problem = await repository.findOne({ problem_id: id });

    return problem as any;
  }

  public async getByCategory(category_id: number): Promise<Problem[]> {
    const repository = MongoDb.getCollection('problems');
    const result = await repository.find({ category_id }).toArray();

    return result as any;
  }
}
