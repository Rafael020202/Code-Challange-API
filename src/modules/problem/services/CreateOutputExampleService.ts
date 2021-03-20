import { inject, injectable } from "tsyringe";
import ICreateOutputExampleDTO from "../dtos/ICreateOutputExampleDTO";
import OutputExampleRepository from "../infra/typeorm/repositories/OutputExampleRepository";

@injectable()
export default class CreateInputExampleService {
  constructor(
    @inject('OutputExampleRepository')
    private outputExampleRepository: OutputExampleRepository
  ) {}

  public async execute(data: ICreateOutputExampleDTO): Promise<void> {
    await this.outputExampleRepository.create(data);
  }
}