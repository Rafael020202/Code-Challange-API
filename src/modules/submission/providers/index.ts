import { container } from 'tsyringe';
import JudgeAPICompilerProvider from './CompilerProvider/implementation/JudgeAPICompilerProvider';
import ICompilerProvider from './CompilerProvider/models/IComplierProvider';

container.registerSingleton<ICompilerProvider>(
  'CompilerProvider',
  JudgeAPICompilerProvider
);