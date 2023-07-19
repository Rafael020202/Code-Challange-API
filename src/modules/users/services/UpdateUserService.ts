import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { IUpdateUserDTO } from '@modules/users/dtos';
import { IUserRepository } from '@modules/users/repositories';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

@injectable()
export class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    email,
    id,
    password,
    name
  }: IUpdateUserDTO): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (user?.email !== email) {
      const userExists = await this.userRepository.findByEmail(email);

      if (userExists) {
        throw new AppError('Email already in use');
      }
    }

    if (user?.password !== password) {
      password = await this.hashProvider.encrypt(password);
    }

    return this.userRepository.update({ password, email, id, name });
  }
}
