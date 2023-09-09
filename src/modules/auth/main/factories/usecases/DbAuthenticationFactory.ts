import { DbAuthentication } from '@modules/auth/data/usecases';
import { AppMongoRepository } from '@modules/auth/infra/db';
import { JwtAdapter } from '@modules/auth/infra/criptography';

export const makeDbAuthentication = () => {
  const appMongoRepository = new AppMongoRepository();
  const jwtAdapter = new JwtAdapter();

  return new DbAuthentication(appMongoRepository, jwtAdapter);
};
