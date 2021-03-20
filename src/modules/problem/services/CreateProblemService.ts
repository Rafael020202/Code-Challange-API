import AppError from "@shared/Error/AppError";
import { inject, injectable } from "tsyringe";
import ICreateProblemDTO from "../dtos/ICreateProblemDTO";
import Problem from "../infra/typeorm/entities/Problem";
import IInputExampleRepository from "../repositories/IInputExampleRepository";
import IOutputExampleRepository from "../repositories/IOutputExampleRepository";
import IProblemRepository from "../repositories/IProblemRepository";

@injectable()
export default class CreateProblemService {
  
  constructor( 
    @inject('ProblemRepository')
    private problemRepository: IProblemRepository,

    @inject('InputExampleRepository')
    private inputExampleRepository: IInputExampleRepository,

    @inject('OutputExampleRepository')
    private outputExampleRepository: IOutputExampleRepository
  ){}
  
  public async execute(data: ICreateProblemDTO): Promise<Problem> {
    const findProblem = await this.problemRepository.getByTitle(data.title);

    if(findProblem) {
      throw new AppError(400, 'There is another problem with the same title');
    }

    const problem = await this.problemRepository.create(data);
    
    problem.input_example.forEach(
      async (data) => { 
        const { id: inputExampleId } = await this.inputExampleRepository.create({
          problem_id: problem.id, 
          value: data.value,
        });

        await this.outputExampleRepository.create({
          input_example_id: inputExampleId,
          value: data.output.value
        });
    });

    return problem;
  }
}