import { Authentication } from '@modules/auth/domain/usecases';
import {
  LoadAppByClientIdAndClientSecretRepository,
  Encrypter
} from '@modules/auth/data/protocols';

export class DbAuthentication implements Authentication {
  constructor(
    private loadAppByClientIdAndClientSecretRepository: LoadAppByClientIdAndClientSecretRepository,
    private encrypter: Encrypter
  ) {}

  public async auth(
    params: Authentication.Params
  ): Promise<Authentication.Result> {
    const app =
      await this.loadAppByClientIdAndClientSecretRepository.loadByClientIdAndClientSecret(
        params.clientId,
        params.clientSecret
      );

    if (app) {
      const accessToken = await this.encrypter.encrypt(app.account_id, '10d');

      return {
        accessToken,
        tokenType: 'Bearer',
        expiresIn: 100 * 3600 * 24 * 10
      };
    }

    return null;
  }
}
