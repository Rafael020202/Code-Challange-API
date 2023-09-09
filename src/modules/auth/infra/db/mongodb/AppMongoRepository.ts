import { MongoDb } from '@shared/infra/db';
import { LoadAppByClientIdAndClientSecretRepository } from '@modules/auth/data/protocols';

export class AppMongoRepository
  implements LoadAppByClientIdAndClientSecretRepository
{
  public async loadByClientIdAndClientSecret(
    clientId: number,
    clientSecret: string
  ): Promise<LoadAppByClientIdAndClientSecretRepository.Result> {
    const collection = MongoDb.getCollection('apps');
    const filter = {
      client_id: clientId,
      client_secret: clientSecret
    };

    return collection.findOne(filter) as any;
  }
}
