import { container, inject, injectable } from "tsyringe";
import ICreateInputExampleDTO from "../dtos/ICreateInputExampleDTO";
import InputExampleRepository from "../infra/typeorm/repositories/InputExampleRepository";
import CreateOutputExampleService from './CreateOutputExampleService';

@injectable()
export default class CreateInputExampleService {
  constructor(
    @inject('InputExampleRepository')
    private inputExampleRepository: InputExampleRepository
  ) {}

  public async execute(data: ICreateInputExampleDTO): Promise<void> {
    const inputExample = await this.inputExampleRepository.create(data);
    
    await container.resolve(CreateOutputExampleService).execute({ 
      input_example_id: inputExample.id,
      value: inputExample.output.value
    });
  }
}