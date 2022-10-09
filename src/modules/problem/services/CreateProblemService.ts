import { inject, injectable } from 'tsyringe';

import { ICreateProblemDTO } from '../dtos';
import { IProblemRepository } from '../repositories';

@injectable()
export class CreateProblemService {
  constructor(
    @inject('ProblemRepository')
    private problemRepository: IProblemRepository
  ) {}

  public async execute(data: ICreateProblemDTO): Promise<void> {
    await this.problemRepository.create(data);
  }
}
