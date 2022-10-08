import { hash, compare } from 'bcrypt';
import IHashProvider from '../models/IHashProvider';

export default class BCryptHashProvider implements IHashProvider {
  public async encrypt(data: string): Promise<string> {
    return await hash(data, 8);
  }

  public async compare(data: string, hashed: string): Promise<boolean> {
    return await compare(data, hashed);
  }
}
