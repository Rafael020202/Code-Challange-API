import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ProblemRepository from '../infra/typeorm/repositories/ProblemRepository';
import IProblemRepository from '../repositories/IProblemRepository';
import CreateProblemService from '../services/CreateProblemService';

export default class ProblemController {
  private problemsRepository: IProblemRepository;

  public async create(request: Request, response: Response) {
    const createProblemService = container.resolve(CreateProblemService);
    const problem = await createProblemService.execute(request.body);
      
    return response.json(problem);
  }
    
  public async index(request: Request, response: Response) {
    const { category_id } = request.params;
    this.problemsRepository = new ProblemRepository();
    
    return response.json(await this.problemsRepository.getByCategory(category_id));
  }

  public async get(request: Request, response: Response) {
    const { id } = request.params;
    this.problemsRepository = new ProblemRepository();

    return response.json(await this.problemsRepository.getById(id));
  } 

}