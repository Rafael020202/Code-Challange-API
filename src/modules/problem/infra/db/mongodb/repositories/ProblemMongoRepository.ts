import * as uuid from 'uuid';
import MongoDb from '@shared/infra/database/mongodb';

import {
  AddProblemRepository,
  ListProblemsRespository
} from '@modules/problem/data/protocols';

export class ProblemMongoRepository
  implements AddProblemRepository, ListProblemsRespository
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

  public async list(userId: string): Promise<ListProblemsRespository.Result> {
    const repository = MongoDb.getCollection('problems');
    const result = await repository.find({ user_id: userId }).toArray();

    return result as any;
  }
}
