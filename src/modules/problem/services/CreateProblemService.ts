import { ICreateProblemDTO } from '../dtos';
import { IProblemRepository } from '../repositories';

export class CreateProblemService {
  constructor(private problemRepository: IProblemRepository) {}

  public async execute(data: ICreateProblemDTO): Promise<void> {
    await this.problemRepository.create(data);
  }
}
