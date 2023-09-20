import * as uuid from 'uuid';

import { MongoDb } from '@shared/infra/db';
import {
  AddSubmissionRespository,
  UpdateSubmissionRespository,
  LoadSubmissionByIdRepository,
  LoadSubmissionsRepositoy
} from '@modules/submission/data/protocols';

export class SubmissionMongoRepository implements AddSubmissionRespository,
  UpdateSubmissionRespository,
  LoadSubmissionByIdRepository,
  LoadSubmissionsRepositoy {
  public async loadById(id: string): Promise<LoadSubmissionByIdRepository.Result> {
    const repository = MongoDb.getCollection('submissions');

    return repository.findOne({ id }, { projection: { _id: 0 } }) as any;
  }

  public async loadAll(data: LoadSubmissionsRepositoy.Params): Promise<LoadSubmissionsRepositoy.Result> {
    const repository = MongoDb.getCollection('submissions');
    const aggregate = [];
    const match = {
      owner: data.owner
    } as any;

    if (data.id) {
      match.id = data.id;
    }

    console.log(match);

    aggregate.push({
      $match: match
    });

    aggregate.push({
      $sort: { [data.sortBy]: data.sortOrder === 'asc' ? 1 : -1 }
    });

    if (data.skip) {
      aggregate.push({
        $skip: Number(data.skip)
      });
    }

    if (data.limit) {
      aggregate.push({
        $limit: Number(data.limit)
      });
    }

    aggregate.push({
      $project: { _id: 0 }
    });

    return repository.aggregate(aggregate).toArray() as any;
  }

  public async update(
    data: UpdateSubmissionRespository.Params
  ): Promise<UpdateSubmissionRespository.Result> {
    const repository = MongoDb.getCollection('submissions');
    const { submission_id, ...upd } = data;

    const result = await repository.updateOne({ id: submission_id }, {
      $set: {
        ...upd,
        updated_at: new Date()
      }
    });

    return result.acknowledged;
  }

  public async add(
    data: AddSubmissionRespository.Params
  ): Promise<AddSubmissionRespository.Result> {
    const repository = MongoDb.getCollection('submissions');
    const submission = {
      id: uuid.v4(),
      ...data,
      created_at: new Date(),
      updated_at: new Date()
    };

    await repository.insertOne(submission);

    return submission as any;
  }
}
