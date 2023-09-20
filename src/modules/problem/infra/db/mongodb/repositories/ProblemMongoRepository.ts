import * as uuid from 'uuid';

import { MongoDb } from '@shared/infra/db';
import {
  AddProblemRepository,
  LoadProblemsByAuthorRepository,
  LoadProblemByIdRepository,
  LoadProblemsRepository
} from '@modules/problem/data/protocols';

export class ProblemMongoRepository
  implements
  AddProblemRepository,
  LoadProblemsByAuthorRepository,
  LoadProblemByIdRepository,
  LoadProblemsRepository {
  public async add(
    data: AddProblemRepository.Params
  ): Promise<AddProblemRepository.Result> {
    const repository = MongoDb.getCollection('problems');
    const problem = {
      id: uuid.v4(),
      ...data,
      created_at: new Date(),
      updated_at: new Date()
    };

    await repository.insertOne({ ...problem });

    return problem as any;
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

  public async loadAll(data: LoadProblemsRepository.Params): Promise<LoadProblemsRepository.Result> {
    const repository = MongoDb.getCollection('problems');
    const aggregate = [];
    const match = {} as any;

    if (data.id) {
      match.id = data.id;
    }

    if (data.author) {
      match.author = data.author;
    }

    if (data.categoryId) {
      match.category_id = data.categoryId;
    }

    aggregate.push({
      $sort: {
        [data.sortBy]: data.sortOrder === 'asc' ? 1 : -1
      }
    });

    aggregate.push({
      $match: match
    });

    aggregate.push({
      $limit: Number(data.limit)
    });

    aggregate.push({
      $skip: Number(data.skip)
    });

    aggregate.push({
      $project: { _id: 0, inputs: 0 }
    });

    return repository.aggregate(aggregate).toArray() as any;
  }
}
