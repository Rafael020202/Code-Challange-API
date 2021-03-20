import { Request, Response } from 'express';
import { container } from 'tsyringe';


import CreateProblemService from '../services/CreateProblemService';
import ListProblemService from '../services/ListProblemsService';

export default class ProblemController {
  public async create(request: Request, response: Response) {
    const createProblemService = container.resolve(CreateProblemService);
    const problem = await createProblemService.execute(request.body);

    return response.json(problem);
  }

  public async index(request: Request, response: Response) {
    const listProblemService = container.resolve(ListProblemService);

    return response.json(await listProblemService.execute());
  }
}