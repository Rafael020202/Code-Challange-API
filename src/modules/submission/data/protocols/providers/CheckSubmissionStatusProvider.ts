export interface CheckSubmissionStatusProvider {
  checkStatus(id: string): Promise<CheckSubmissionStatusProvider.Result>;
}

export namespace CheckSubmissionStatusProvider {
  export type Result = {
    stdout: string;
    time: number;
    memory: number;
    compile_output: string;
    message: string;
  };
}
