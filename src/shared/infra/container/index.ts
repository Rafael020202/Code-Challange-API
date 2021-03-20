import { container } from 'tsyringe';
import ProblemRepository from '@modules/problem/infra/typeorm/repositories/ProblemRepository';
import InputExampleRepository from '@modules/problem/infra/typeorm/repositories/InputExampleRepository';
import OutputExampleRepository from '@modules/problem/infra/typeorm/repositories/OutputExampleRepository';

container.registerSingleton<ProblemRepository>(
  'ProblemRepository',
  ProblemRepository
);

container.registerSingleton<InputExampleRepository>(
  'InputExampleRepository',
  InputExampleRepository
);

container.registerSingleton<OutputExampleRepository>(
  'OutputExampleRepository',
  OutputExampleRepository
);