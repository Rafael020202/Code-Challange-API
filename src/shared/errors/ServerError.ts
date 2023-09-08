export class ServerError extends Error {
  error: string;
  error_detail: string;
  http_status: number;

  constructor() {
    super('Internal server error');

    this.error = 'server_error';
    this.http_status = 500;
    this.error_detail = 'An internal server error has occoured';
  }
}
