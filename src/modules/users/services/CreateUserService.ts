import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateUserDTO } from '@modules/users/dtos';
import { IUserRepository } from '@modules/users/repositories';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(data: ICreateUserDTO): Promise<void> {
    const findUser = await this.userRepository.findByEmail(data.email);

    if (findUser) {
      throw new AppError('Email already exists');
    }

    data.password = await hash(data.password, 8);

    return this.userRepository.create(data);
  }
}
