import { AuthController } from '@modules/auth/presentation/controllers';
import { makeDbAuthentication } from '@modules/auth/main/factories';

export const makeAuthController = () => {
  const dbAuthentication = makeDbAuthentication();

  return new AuthController(dbAuthentication);
};
