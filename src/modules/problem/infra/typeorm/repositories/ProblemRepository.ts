import ICreateProblemDTO from "@modules/problem/dtos/ICreateProblemDTO";
import IProblemRepository from "@modules/problem/repositories/IProblemRepository";
import { EntityRepository, getRepository, Repository } from "typeorm";
import InputExample from "../entities/InputExample";
import Problem from "../entities/Problem";


@EntityRepository(Problem)
export default class ProblemRepository implements IProblemRepository{
  private ormRepository: Repository<Problem>
  
  constructor() {
    this.ormRepository = getRepository(Problem);
  }

  public async getAll(): Promise<Problem[]> {
    const problems = await this.ormRepository.find({
      relations: ['input_example', 'input_example.output']
    });

    return problems;
  }
  
  public async getByTitle(title: string): Promise<Problem | undefined> {
    const problem = await this.ormRepository.findOne({ where: { title } });
    
    return problem;
  }

  public async create(data: ICreateProblemDTO): Promise<Problem> {
    const problem = this.ormRepository.create(data);

    return (await this.ormRepository.save(problem));
  }

  


}