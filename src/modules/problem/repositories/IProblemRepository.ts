import ICreateProblemDTO from "../dtos/ICreateProblemDTO";
import Problem from "../infra/typeorm/entities/Problem";

export default interface IProblemRepository  {
  create(data: ICreateProblemDTO): Promise<Problem>;
  getByTitle(title: string): Promise<Problem | undefined>;
  getAll(): Promise<Problem[]>;
}