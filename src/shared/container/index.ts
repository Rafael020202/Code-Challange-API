import { container } from 'tsyringe';

import { UserRepository } from '@modules/users/infra/database/mongodb/repositories';
import { IUserRepository } from '@modules/users/repositories';

import '@modules/users/providers';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
