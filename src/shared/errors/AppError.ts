export default class AppError {
  errorCode: number;
  message: string;

  constructor(message = '', errorCode = 400) {
    this.errorCode = errorCode;
    this.message = message;
  }
}
