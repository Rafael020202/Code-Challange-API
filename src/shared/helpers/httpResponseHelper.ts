import { HttpResponse } from '@shared/protocols';
import { ServerError } from '@shared/errors';

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
