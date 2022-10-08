import { container } from 'tsyringe';

import IProblemRepository from '@modules/problem/repositories/IProblemRepository';
import ProblemRepository from '@modules/problem/infra/typeorm/repositories/ProblemRepository';

import { UserRepository } from '@modules/users/infra/database/mongodb/repositories';
import IUserRepository from '@modules/users/repositories/IUserRepository';

import ISubmissionRepository from '@modules/submission/repositories/ISubmissionRepository';
import SubmissionRepository from '@modules/submission/infra/typeorm/repositories/SubmissionRepository';

import IInputRepository from '@modules/problem/repositories/IInputRepository';
import InputRepository from '@modules/problem/infra/typeorm/repositories/InputRepository';

import '@modules/submission/providers';
import '@modules/users/providers';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IProblemRepository>(
  'ProblemRepository',
  ProblemRepository
);

container.registerSingleton<ISubmissionRepository>(
  'SubmissionRepository',
  SubmissionRepository
);

container.registerSingleton<IInputRepository>(
  'InputRepository',
  InputRepository
);
