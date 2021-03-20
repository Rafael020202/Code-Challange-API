import ICreateOutputExampleDTO from "@modules/problem/dtos/ICreateOutputExampleDTO";
import IOutputExampleRepository from "@modules/problem/repositories/IOutputExampleRepository";
import { getRepository, Repository } from "typeorm";
import OutputExample from "../entities/OutputExample";


export default class OutputExampleRepository implements IOutputExampleRepository {
  private ormRepository: Repository<OutputExample>

  constructor() {
    this.ormRepository = getRepository(OutputExample);
  }

  public async create(data: ICreateOutputExampleDTO): Promise<void> {
    const outputExample = this.ormRepository.create(data);
    await this.ormRepository.save(outputExample);
  }


}