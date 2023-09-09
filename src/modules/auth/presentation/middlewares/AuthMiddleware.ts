import { HttpResponse, Middleware } from '@shared/protocols';
import { unauthorized, ok } from '@shared/helpers';
import {
  Unauthenticated,
  InvalidClient
} from '@modules/auth/presentation/errors';
import { Decrypter } from '@modules/auth/data/protocols';

export class AuthMiddleware implements Middleware {
  constructor(private decrypter: Decrypter) {}

  public async handle(data: AuthMiddleware.Params): Promise<HttpResponse> {
    if (!data.authorization) {
      return unauthorized(new Unauthenticated());
    }

    const [, token] = data.authorization.split(' ');

    try {
      const { id } = await this.decrypter.decrypt(token);

      return ok({ account_id: id });
    } catch (error) {
      return unauthorized(new InvalidClient());
    }
  }
}

export namespace AuthMiddleware {
  export type Params = {
    authorization: string;
  };
}
