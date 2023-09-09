import { App } from '@modules/auth/domain/models';

export interface LoadAppByClientIdAndClientSecretRepository {
  loadByClientIdAndClientSecret(
    clientId: number,
    clientSecret: string
  ): Promise<LoadAppByClientIdAndClientSecretRepository.Result>;
}

export namespace LoadAppByClientIdAndClientSecretRepository {
  export type Result = App;
}
