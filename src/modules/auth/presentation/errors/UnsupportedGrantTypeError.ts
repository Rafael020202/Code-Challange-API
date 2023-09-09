export class UnsupportedGrantTypeError extends Error {
  error: string;
  error_detail: string;
  http_status: number;

  constructor() {
    super('Unsupported grant type error');

    this.error = 'unsupported_grant_type';
    this.http_status = 400;
    this.error_detail = 'unsupported grant_type';
  }
}
