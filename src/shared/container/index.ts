import { container } from 'tsyringe';

import { ProblemRepository } from '@modules/problem/infra/database/mongodb/repositories';
import { IProblemRepository } from '@modules/problem/repositories';

import { UserRepository } from '@modules/users/infra/database/mongodb/repositories';
import { IUserRepository } from '@modules/users/repositories';

import { ISubmissionRepository } from '@modules/submission/repositories';
import { SubmissionRepository } from '@modules/submission/infra/database/mongodb/repositories';

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
