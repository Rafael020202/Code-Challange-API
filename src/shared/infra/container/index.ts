import { container } from 'tsyringe';
import ProblemRepository from '@modules/problem/infra/typeorm/repositories/ProblemRepository';
import InputExampleRepository from '@modules/problem/infra/typeorm/repositories/InputExampleRepository';
import OutputExampleRepository from '@modules/problem/infra/typeorm/repositories/OutputExampleRepository';

import '@modules/problem/providers/CompilerProvider';
import IProblemRepository from '@modules/problem/repositories/IProblemRepository';
import IInputExampleRepository from '@modules/problem/repositories/IInputExampleRepository';
import IOutputExampleRepository from '@modules/problem/repositories/IOutputExampleRepository';

container.registerSingleton<IProblemRepository>(
  'ProblemRepository',
  ProblemRepository
);

container.registerSingleton<IInputExampleRepository>(
  'InputExampleRepository',
  InputExampleRepository
);

container.registerSingleton<IOutputExampleRepository>(
  'OutputExampleRepository',
  OutputExampleRepository
);