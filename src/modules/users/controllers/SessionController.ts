import { Response, Request } from 'express';
import { container } from 'tsyringe';
import CreateSessionService from '../services/CreateSessionService';

export default class SessionControler {
  public async create(request: Request, response: Response) {
    const createSessionService = container.resolve(CreateSessionService);
    const service = await createSessionService.execute(request.body);

    return response.json(service);
  }
}
