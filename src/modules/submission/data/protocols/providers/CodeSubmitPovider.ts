export interface CodeSubmitPovider {
  submit(data: CodeSubmitPovider.Params): Promise<CodeSubmitPovider.Result>;
}

export namespace CodeSubmitPovider {
  export type Params = {
    source_code: string;
    stdin: string;
    language: number;
  };

  export type Result = {
    token: string;
  };
}
