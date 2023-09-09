export interface Encrypter {
  encrypt(plaintext: string, expiresIn: string): Promise<string>;
}
