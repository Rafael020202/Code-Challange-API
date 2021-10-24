import IInputDTO from "@modules/problem/dtos/IInputDTO";
import IInputRepository from "@modules/problem/repositories/IInputRepository";
import { EntityRepository, getRepository, Repository } from "typeorm";
import Input from "../entities/Input";

@EntityRepository(Input)
export default class InputRepository implements IInputRepository{
  private ormRepository: Repository<Input>;

  constructor(){
    this.ormRepository = getRepository(Input);
  }

  public async create(data: IInputDTO): Promise<Input> {
    const input = this.ormRepository.create(data); 
    
    return await this.ormRepository.save(input);
  }

  public async getExamples(problem_id: string): Promise<Input[]> {
    return this.ormRepository.find({ where: { 
        problem_id, isExample: true
      }
    });
  }

  public async getByProblemId(problem_id: string): Promise<Input[]> {
    return this.ormRepository.find({ where: {problem_id} });
  }
}