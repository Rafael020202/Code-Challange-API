import * as uuid from 'uuid';
import MongoDb from '@shared/infra/database/mongodb';

import { Problem } from '@modules/problem/models';
import { IProblemRepository } from '@modules/problem/repositories';
import { ICreateProblemDTO } from '@modules/problem/dtos';
import {
  AddProblemRepository,
  ListProblemsRespository
} from '@modules/problem/data/protocols';

export class ProblemRepository
  implements IProblemRepository, AddProblemRepository, ListProblemsRespository
{
  public async add(
    data: AddProblemRepository.Params
  ): Promise<AddProblemRepository.Result> {
    const repository = MongoDb.getCollection('problems');
    const problem = {
      id: uuid.v4(),
      ...data
    };
    const dbResult = await repository.insertOne(problem);

    return dbResult.acknowledged;
  }

  public async list(userId: string): Promise<Problem[]> {
    const repository = MongoDb.getCollection('problems');
    const result = await repository.find({ user_id: userId }).toArray();

    return result as any;
  }

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
