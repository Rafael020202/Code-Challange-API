import { inject, injectable } from "tsyringe";
import Problem from "../infra/typeorm/entities/Problem";
import ProblemRepository from "../infra/typeorm/repositories/ProblemRepository";

@injectable()
export default class ListProblemService {

  constructor(
    @inject('ProblemRepository')
    private problemRepository: ProblemRepository
  ){}

  public async execute(): Promise<Problem[]> {
    return await this.problemRepository.getAll();
  }
}