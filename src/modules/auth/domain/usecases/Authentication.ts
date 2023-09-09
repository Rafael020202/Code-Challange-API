export interface Authentication {
  auth(params: Authentication.Params): Promise<Authentication.Result>;
}

export namespace Authentication {
  export type Params = {
    clientId: number;
    clientSecret: string;
  };

  export type Result = {
    accessToken: string;
    expiresIn: number;
    tokenType: string;
  };
}
