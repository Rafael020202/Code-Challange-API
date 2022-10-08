import MongoDb from '@shared/infra/database/mongodb';

import ISubmissionDTO from '@modules/submission/dtos/ISubmissionDTO';
import Submission from '@modules/submission/infra/database/mongodb/entities/Submission';
import ISubmissionRepository from '@modules/submission/repositories/ISubmissionRepository';

export class SubmissionRepository implements ISubmissionRepository {
  private repository = MongoDb.getCollection('submissions');

  public async create(data: ISubmissionDTO): Promise<Submission> {
    await this.repository.insertOne(data);

    return new Submission({});
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
