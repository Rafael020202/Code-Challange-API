import { inject, injectable } from 'tsyringe';

import { IProblemRepository } from '../repositories';

@injectable()
export class ListProblemService {
  constructor(
    @inject('ProblemRepository')
    private problemRepository: IProblemRepository
  ) {}

  public async execute(userId: string) {
    return this.problemRepository.getAll(userId);
  }
}
