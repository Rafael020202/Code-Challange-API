import { Request, Response } from 'express';

import { Controller } from '@shared/protocols';

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    try {
      const httpResponse = await controller.handle(request.body);

      return response.status(httpResponse.status).json(httpResponse.body);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: 'server_error',
        http_status: 500,
        error_description: 'An internal server error has occured'
      });
    }
  };
};