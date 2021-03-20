import { container } from 'tsyringe';
import JudgeAPICompilerProvider from './implementation/JudgeAPICompilerProvider';
import ICompilerProvider from './models/IComplierProvider';

container.registerSingleton<ICompilerProvider>(
  'ICompilerProvider',
  JudgeAPICompilerProvider
);