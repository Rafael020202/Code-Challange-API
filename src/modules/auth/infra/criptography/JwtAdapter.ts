import jwt from 'jsonwebtoken';

import { Encrypter, Decrypter } from '@modules/auth/data/protocols';
import authConfig from '@config/authConfig';

export class JwtAdapter implements Encrypter, Decrypter {
  public async encrypt(plaintext: string, expiresIn: string): Promise<string> {
    return jwt.sign({ sub: plaintext }, authConfig.secret, {
      expiresIn
    });
  }

  public async decrypt(ciphertext: string): Promise<string> {
    const { sub } = jwt.verify(ciphertext, authConfig.secret);

    return sub as any;
  }
}
