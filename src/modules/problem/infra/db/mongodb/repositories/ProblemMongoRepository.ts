import * as uuid from 'uuid';

import { MongoDb } from '@shared/infra/db';
import {
  AddProblemRepository,
  LoadProblemsByAuthorRepository,
  LoadProblemByIdRepository,
  LoadProblemsByFiltersRepository
} from '@modules/problem/data/protocols';

export class ProblemMongoRepository
  implements
  AddProblemRepository,
  LoadProblemsByAuthorRepository,
  LoadProblemByIdRepository,
  LoadProblemsByFiltersRepository {
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

  public async loadByFilters(data: LoadProblemsByFiltersRepository.Params): Promise<LoadProblemsByFiltersRepository.Result> {
    const repository = MongoDb.getCollection('problems');
    const search = [];

    if (data.sort) {
      search.push({
        $sort: {
          [data.sort.field]: data.sort.order === 'asc' ? 1 : -1
        }
      });
    }

    if (data.filters) {
      search.push({
        $match: data.filters
      });
    }

    if (data.limit) {
      search.push({
        $limit: Number(data.limit)
      });
    }

    if (data.skip) {
      search.push({
        $skip: Number(data.skip)
      });
    }

    search.push({
      $project: { _id: 0, inputs: 0 }
    });

    const aggregateResult = await repository.aggregate(search).toArray();

    return aggregateResult as any;
  }
}
