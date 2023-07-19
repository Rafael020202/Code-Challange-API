if (process.env.NODE_ENV === 'production') require('module-alias/register');

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
import apiDocument from '@shared/docs';
import { config } from 'dotenv';
import { serve, setup } from 'swagger-ui-express';

config();

const app = express();

app.use(cors());
app.use(json());
app.use(logRequest);
app.use('/api-docs', serve, setup(apiDocument));

app.use(routes);

app.use((error: Error, _: Request, response: Response, __: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.errorCode).json({ message: error.message });
  }

  return response.status(500).json({ message: error.message });
});

app.listen(8080, () => {
  console.log(chalk.yellow('Application up and running on port 3333'));
});
