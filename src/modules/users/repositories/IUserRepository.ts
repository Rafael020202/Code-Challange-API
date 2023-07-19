import { User } from '@modules/users/entities';
import { ICreateUserDTO, IUpdateUserDTO } from '@modules/users/dtos';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(user_id: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<void>;
  update(data: IUpdateUserDTO): Promise<void>;
}
