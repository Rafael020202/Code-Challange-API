import 'reflect-metadata';
import 'express-async-errors';

import express, { json, NextFunction, Request, Response } from 'express';
import chalk from 'chalk';
import routes from './routes';

import '../container';
import '../database';
import AppError from '@shared/Error/AppError';

const app = express();

app.use(json());
app.use(routes);
app.use(
  (error: Error, _: Request, response: Response, __: NextFunction ) => {
    if (error instanceof AppError) {
      return response.status(error.errorCode).json({ message: error.message });
    }

    return response.status(500).json({ message: error.message });
  }
);


app.listen(3333, () => {
  console.log(chalk.yellow('Application up and running on port 3333'))
});