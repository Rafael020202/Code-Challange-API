export default interface IHashProvider {
  encrypt(data: string): Promise<string>;
  compare(data: string, hashed: string): Promise<boolean>;
}
