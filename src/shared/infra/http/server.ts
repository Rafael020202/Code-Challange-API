import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import '../database';
import '../../container';

import express, { json, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import chalk from 'chalk';

import routes from './routes';
import AppError from '@shared/errors/AppError';
import logRequest from '@shared/middlewares/logRequest';

const app = express();

app.use(cors());
app.use(json());
app.use(logRequest);

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