interface IResponse {
  stdout: string;
  time: number;
  memory: number;
  compile_output: string;
  message: string;
}

export default interface ICompilerProvider {
  submit(source_code: string): Promise<IResponse>; 
}