import { Middleware } from '@shared/protocols';

import { Request, Response, NextFunction } from 'express';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      ...(req.headers || {})
    };

    const httpResponse = await middleware.handle(request);

    if (httpResponse.status === 200) {
      Object.assign(req, httpResponse.body);
      next();
    } else {
      res.status(httpResponse.status).json({
        error: httpResponse.body
      });
    }
  };
};
