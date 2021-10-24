import AppError from '@shared/errors/AppError';
import { hash }  from 'bcrypt';
import { inject, injectable } from "tsyringe";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/entities/User";
import IUserRepository from "../repositories/IUserRepository";

@injectable()
export default class CreateUserService {
  
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ){}

  public async execute(data: ICreateUserDTO): Promise<User> {
    const findUser = await this.userRepository.findByEmail(data.email);

    if (findUser) {
      throw new AppError('Email already exists');
    }

    data.password = await hash(data.password, 8);

    return this.userRepository.create(data);

  }
}