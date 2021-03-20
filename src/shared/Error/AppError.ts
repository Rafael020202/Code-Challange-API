export default class AppError {
  errorCode: number;
  message: string;

  constructor(errorCode = 400, message = '') {
    this.errorCode = errorCode;
    this.message = message;
  }
}