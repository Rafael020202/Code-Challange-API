import { Controller, HttpResponse } from '@shared/protocols';
import { badRequest, unauthorized, ok } from '@shared/helpers';
import {
  UnsupportedGrantTypeError,
  InvalidClient
} from '@modules/auth/presentation/errors';
import { Authentication } from '@modules/auth/domain/usecases';

export class AuthController implements Controller {
  constructor(private dbAuthentication: Authentication) {}

  public async handle(request: AuthController.Request): Promise<HttpResponse> {
    if (request.grant_type !== 'client_credentials') {
      return badRequest(new UnsupportedGrantTypeError());
    }

    const authParams = {
      clientId: Number(request.client_id),
      clientSecret: request.client_secret
    };

    const authResult = await this.dbAuthentication.auth(authParams);

    if (!authResult) {
      return unauthorized(new InvalidClient());
    }

    return ok({
      access_token: authResult.accessToken,
      expires_in: authResult.expiresIn,
      token_type: authResult.tokenType
    });
  }
}

export namespace AuthController {
  export type Request = {
    client_id: string;
    client_secret: string;
    grant_type: string;
  };
}
