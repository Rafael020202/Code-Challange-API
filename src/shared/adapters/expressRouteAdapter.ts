import { Request, Response } from 'express';

import { Controller } from '@shared/protocols';
import { ServerError } from '@shared/errors';

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    try {
      const req = {
        ...(request.body || {}),
        ...(request.query || {}),
        ...(request.params || {}),
        user_id: request.user.id
      };

      const httpResponse = await controller.handle(req);

      return response.status(httpResponse.status).json(httpResponse.body);
    } catch (error) {
      console.error(error);

      return response.status(500).json(new ServerError());
    }
  };
};
