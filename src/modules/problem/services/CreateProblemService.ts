import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProblemDTO from '../dtos/IProblemDTO';
import Problem from '../infra/typeorm/entities/Problem';

import IInputRepository from '../repositories/IInputRepository';
import IProblemRepository from '../repositories/IProblemRepository';


@injectable()
export default class CreateProblemService {
  
  constructor( 
    @inject('ProblemRepository')
    private problemRepository: IProblemRepository,

    @inject('InputRepository')
    private inputRepository: IInputRepository
  ){}
  
  public async execute(data: IProblemDTO): Promise<Problem> {
    const findProblem = await this.problemRepository.getByTitle(data.title);

    if(findProblem) {
      throw new AppError('There is another problem with the same title',  400);
    }

    const problem = await this.problemRepository.create(data);

    data.inputs.forEach(async (input) => {
      await this.inputRepository.create({
        problem_id: problem.id,
        ...input
      });
    });

    return problem;
  }
}