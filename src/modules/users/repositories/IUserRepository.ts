import User from '@modules/users/infra/database/mongodb/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(user_id: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<void>;
  update(data: IUpdateUserDTO): Promise<void>;
}
