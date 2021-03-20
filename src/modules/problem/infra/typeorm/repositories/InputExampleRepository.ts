import ICreateInputExampleDTO from "@modules/problem/dtos/ICreateInputExampleDTO";
import IInputExampleRepository from "@modules/problem/repositories/IInputExampleRepository";
import { getRepository, Repository } from "typeorm";
import InputExample from "../entities/InputExample";


export default class InputExampleRepository implements IInputExampleRepository{
  private ormRepository: Repository<InputExample>

  constructor() {
    this.ormRepository = getRepository(InputExample);
  }

  public async create(data: ICreateInputExampleDTO): Promise<InputExample> {
    const inputExample = this.ormRepository.create(data);
    return await this.ormRepository.save(inputExample);
  }

}