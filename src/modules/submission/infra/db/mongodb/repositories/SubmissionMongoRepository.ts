import * as uuid from 'uuid';

import MongoDb from '@shared/infra/database/mongodb';
import { AddSubmissionRespository } from '@modules/submission/data/protocols';

export class SubmissionMongoRepository implements AddSubmissionRespository {
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
