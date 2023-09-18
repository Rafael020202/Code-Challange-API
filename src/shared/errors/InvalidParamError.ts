export class InvalidParamError extends Error {
  error: string;
  error_detail: string;
  http_status: number;

  constructor(detail: string) {
    super('Invalid Request');

    this.error = 'invalid_request';
    this.http_status = 400;
    this.error_detail = detail;
  }
}
