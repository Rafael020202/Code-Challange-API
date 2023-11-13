export class NotFoundError extends Error {
  error: string;
  error_detail: string;
  http_status: number;

  constructor(param: string) {
    super('Invalid Request');

    this.error = 'invalid_request';
    this.http_status = 404;
    this.error_detail = `${param} not found`;
  }
}
