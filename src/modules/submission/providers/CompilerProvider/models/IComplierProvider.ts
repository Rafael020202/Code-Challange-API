interface IResponse {
  stdout: string;
  time: number;
  memory: number;
  compile_output: string;
  message: string;
}

interface ISubmit {
  source_code: string;
  stdin: string;
}

export default interface ICompilerProvider {
  submit(data: ISubmit): Promise<{ token: string }>;
  getSubmissionStatus(id: string): Promise<IResponse>;
}
