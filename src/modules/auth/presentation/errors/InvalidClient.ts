export class InvalidClient extends Error {
  error: string;
  error_detail: string;
  http_status: number;

  constructor() {
    super('Invalid Client');

    this.error = 'invalid_client';
    this.http_status = 401;
    this.error_detail = 'Client Authentication failed';
  }
}
