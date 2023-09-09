import * as uuid from 'uuid';

import { MongoDb } from '@shared/infra/db';
import {
  AddProblemRepository,
  LoadProblemsByAuthorRepository,
  LoadProblemByIdRepository
} from '@modules/problem/data/protocols';

export class ProblemMongoRepository
  implements
    AddProblemRepository,
    LoadProblemsByAuthorRepository,
    LoadProblemByIdRepository
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

  public async loadByAuthor(
    author: string
  ): Promise<LoadProblemsByAuthorRepository.Result> {
    const repository = MongoDb.getCollection('problems');
    const result = await repository
      .find({ author }, { projection: { _id: 0 } })
      .toArray();

    return result as any;
  }

  public async loadById(id: string): Promise<LoadProblemByIdRepository.Result> {
    const repository = MongoDb.getCollection('problems');
    const result = await repository.findOne({ id }, { projection: { _id: 0 } });

    return result as any;
  }
}
