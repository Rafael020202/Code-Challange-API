if (process.env.NODE_ENV === 'production') require('module-alias/register');

import 'dotenv/config';
import 'express-async-errors';

import express, { json, Request, Response } from 'express';
import { serve, setup } from 'swagger-ui-express';
import { config } from 'dotenv';
import cors from 'cors';
import chalk from 'chalk';

import { MongoDb } from '@shared/infra/db';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import logRequest from '@shared/middlewares/logRequest';
import apiDocument from '@shared/docs';

config();

MongoDb.connect()
  .then(() => {
    const app = express();

    app.use(cors());
    app.use(json());
    app.use(
      express.urlencoded({
        extended: true
      })
    );
    app.use(logRequest);

    //@ts-ignore
    app.use('/api-docs', serve, setup(apiDocument));

    app.use(routes);

    app.use((error: Error, _: Request, response: Response) => {
      if (error instanceof AppError) {
        return response
          .status(error.errorCode)
          .json({ message: error.message });
      }

      return response.status(500).json({ message: error.message });
    });

    app.listen(8080, () => {
      console.log(chalk.yellow('Application up and running on port 3333'));
    });
  })
  .catch((error) => console.error('failed to connect to mongodb', error));
