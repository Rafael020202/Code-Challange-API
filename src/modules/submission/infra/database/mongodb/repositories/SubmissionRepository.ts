import * as uuid from 'uuid';

import MongoDb from '@shared/infra/database/mongodb';

import { ICreateSubmissionDTO } from '@modules/submission/dtos';
import { Submission } from '@modules/submission/infra/database/mongodb/entities';
import { ISubmissionRepository } from '@modules/submission/repositories';

export class SubmissionRepository implements ISubmissionRepository {
  private repository = MongoDb.getCollection('submissions');

  public async create(data: ICreateSubmissionDTO): Promise<Submission> {
    const submission = {
      submission_id: uuid.v4(),
      ...data
    };

    await this.repository.insertOne(submission);

    return new Submission(submission);
  }

  public async get(id: number): Promise<Submission> {
    const submission = await this.repository.findOne({ submission_id: id });

    return new Submission(submission);
  }

  public async index(user_id: number): Promise<Submission[]> {
    const result = await this.repository.find({ user_id });
    const values = await result.toArray();
    const submissions = values.map((value) => new Submission(value));

    return submissions;
  }
}
