import { inject, injectable } from "tsyringe";
import IProblemRepository from "../repositories/IProblemRepository";

@injectable()
export default class ListProblemService {
  
  constructor(
    @inject('ProblemRepository')
    private problemRepository: IProblemRepository
  ) {}

  public async execute(id?: string) {
    if (id) return this.problemRepository.getById(id);

    return this.problemRepository.getAll();
  }
}