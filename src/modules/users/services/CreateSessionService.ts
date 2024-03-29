import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import authConfig from '@config/authConfig';

import { User } from '@modules/users/entities';
import { ICreateSessionDTO } from '@modules/users/dtos';
import { IUserRepository } from '@modules/users/repositories';

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export class CreateSessionService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(data: ICreateSessionDTO): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError('User does not exist', 404);
    }

    const passwordCompare = await compare(data.password, user.password);

    if (!passwordCompare) {
      throw new AppError('Wrong Password');
    }

    const token = sign({}, authConfig.secret, {
      subject: String(user.id),
      expiresIn: authConfig.expiresIn
    });

    delete user.password;

    return {
      user,
      token
    };
  }
}
