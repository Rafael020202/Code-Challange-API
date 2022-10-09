import * as uuid from 'uuid';
import MongoDb from '@shared/infra/database/mongodb';

import { User } from '@modules/users/infra/database/mongodb/entities';
import { ICreateUserDTO, IUpdateUserDTO } from '@modules/users/dtos';
import { IUserRepository } from '@modules/users/repositories';

export class UserRepository implements IUserRepository {
  private repository = MongoDb.getCollection('users');

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });

    return user ? new User(user) : undefined;
  }

  public async findById(user_id: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ user_id });

    return user ? new User(user) : undefined;
  }

  public async create(data: ICreateUserDTO): Promise<void> {
    this.repository.insertOne({
      user_id: uuid.v4(),
      ...data
    });
  }

  public async update(data: IUpdateUserDTO): Promise<void> {
    await this.repository.updateOne({ user_id: data.id }, { $set: data });
  }
}
