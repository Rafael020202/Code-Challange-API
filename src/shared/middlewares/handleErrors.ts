import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';

export default function handleErrors(
  error: Error,
  request: Request,
  response: Response
) {
  if (error instanceof AppError) {
    console.log(error.message);

    return response.status(error.errorCode).json({ message: error.message });
  }

  console.log(error.message);

  return response.status(500).json({ message: error.message });
}
