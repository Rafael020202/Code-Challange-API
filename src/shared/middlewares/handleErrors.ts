import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';

export default function handleErrors(error: Error ,request: Request, response: Response, next: NextFunction ) {
  if (error instanceof AppError) {
    return response.status(error.status).json({ message: error.message });
  }

  return response.status(500).json({ message: error.message });
}