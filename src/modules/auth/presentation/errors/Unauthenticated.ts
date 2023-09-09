export class Unauthenticated extends Error {
  error: string;
  error_detail: string;
  http_status: number;

  constructor() {
    super('Unauthenticated');

    this.error = 'Unauthenticated';
    this.http_status = 401;
    this.error_detail = 'Client unauthenticated';
  }
}
