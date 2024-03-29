import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ProblemRepository } from '../infra/database/mongodb/repositories';
import { IProblemRepository } from '../repositories';
import { CreateProblemService } from '../services';

export class ProblemController {
  private problemsRepository: IProblemRepository;

  public async create(request: Request, response: Response) {
    console.log(request.body);
    const createProblemService = container.resolve(CreateProblemService);
    const problem = await createProblemService.execute(request.body);

    return response.json(problem);
  }

  public async index(request: Request, response: Response) {
    const { user_id } = request.body;

    this.problemsRepository = new ProblemRepository();

    return response.json(await this.problemsRepository.getAll(user_id));
  }

  public async get(request: Request, response: Response) {
    const { id } = request.params;
    this.problemsRepository = new ProblemRepository();

    return response.json(await this.problemsRepository.getById(id));
  }
}
