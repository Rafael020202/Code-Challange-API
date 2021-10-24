import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';

export default (request: Request, _: Response, next: NextFunction) => {
  console.log(`${chalk.green.bold([request.method])} - ${chalk.yellow.bold(request.url)}`);

  return next();
}