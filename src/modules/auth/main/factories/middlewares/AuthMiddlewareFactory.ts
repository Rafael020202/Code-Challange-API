import { AuthMiddleware } from '@modules/auth/presentation/middlewares';
import { JwtAdapter } from '@modules/auth/infra/criptography';

export const makeAuthMiddleware = () => {
  const jwtAdapter = new JwtAdapter();

  return new AuthMiddleware(jwtAdapter);
};
