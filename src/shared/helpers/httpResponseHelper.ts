import { HttpResponse } from '@shared/protocols';
import { ServerError, NotFoundError } from '@shared/errors';

export const noContent = (): HttpResponse => {
  return {
    status: 204
  };
};

export const ok = (body: any): HttpResponse => {
  return {
    status: 200,
    body
  };
};

export const unauthorized = (error: Error): HttpResponse => ({
  status: 401,
  body: error
});

export const forbidden = (error: Error): HttpResponse => {
  return {
    status: 403,
    body: error
  };
};

export const serverError = (): HttpResponse => ({
  status: 500,
  body: new ServerError()
});

export const badRequest = (error: Error): HttpResponse => {
  return {
    status: 400,
    body: error
  };
};

export const notExists = (param: string): HttpResponse => {
  return {
    status: 404,
    body: new NotFoundError(param)
  };
};
