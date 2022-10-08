import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';

export class UserController {
  public async create(request: Request, response: Response) {
    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute(request.body);

    return response.status(201).json({});
  }

  public async update(request: Request, response: Response) {
    const updateUserService = container.resolve(UpdateUserService);
    await updateUserService.execute({ ...request.body, id: request.user.id });

    return response.status(204).json({});
  }
}
