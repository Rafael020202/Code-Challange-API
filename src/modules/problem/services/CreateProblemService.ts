import { inject, injectable } from 'tsyringe';

import IProblemDTO from '../dtos/ICreateProblemDTO';

import IProblemRepository from '../repositories/IProblemRepository';

@injectable()
export default class CreateProblemService {
  constructor(
    @inject('ProblemRepository')
    private problemRepository: IProblemRepository
  ) {}

  public async execute(data: IProblemDTO): Promise<void> {
    await this.problemRepository.create(data);
  }
}
