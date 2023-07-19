import { inject, injectable } from 'tsyringe';

import { IProblemRepository } from '../repositories';

@injectable()
export class ListProblemService {
  constructor(
    @inject('ProblemRepository')
    private problemRepository: IProblemRepository
  ) {}

  public async execute(id?: string) {
    if (id) return this.problemRepository.getById(Number(id));

    return this.problemRepository.getAll(1);
  }
}
