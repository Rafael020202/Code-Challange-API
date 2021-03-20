import AppError from "@shared/Error/AppError";
import { container, inject, injectable } from "tsyringe";
import ICreateProblemDTO from "../dtos/ICreateProblemDTO";
import Problem from "../infra/typeorm/entities/Problem";
import ProblemRepository from "../infra/typeorm/repositories/ProblemRepository";
import CreateInputExampleService from "./CreateInputExampleService";

@injectable()
export default class CreateProblemService {
  
  constructor( 
    @inject('ProblemRepository')
    private problemRepository: ProblemRepository 
  ){}
  
  public async execute(data: ICreateProblemDTO): Promise<Problem> {
    const findProblem = await this.problemRepository.getByTitle(data.title);

    if(findProblem) {
      throw new AppError(400,'There is another problem with the same title');
    }

    const problem = await this.problemRepository.create(data);
    const createInputExample = container.resolve(CreateInputExampleService);
    
    problem.input_example.forEach(
      async (inputExample) => await createInputExample.execute(
        { 
          problem_id: problem.id, 
          value: inputExample.value,

          output: inputExample.output
        }
      )
    );

    return problem;
  }
}