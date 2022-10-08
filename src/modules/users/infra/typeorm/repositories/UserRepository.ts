import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import User from '../entities/User';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    return await this.ormRepository.save(user);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return await this.ormRepository.findOne({ where: { email } });
  }

  public async findById(user_id: string): Promise<User | undefined> {
    return await this.ormRepository.findOne({
      relations: ['suppliers'],
      where: { id: user_id }
    });
  }

  public async update(data: IUpdateUserDTO): Promise<void> {
    const user = (await this.ormRepository.findOne({
      id: Number(data.id)
    })) as User;

    Object.assign(user, data);

    await this.ormRepository.save(user);
  }
}
