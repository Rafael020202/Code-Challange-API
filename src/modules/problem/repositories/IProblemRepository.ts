import IProblemDTO from "../dtos/IProblemDTO";
import Problem from "../infra/typeorm/entities/Problem";

export default interface IProblemRepository  {
  create(data: IProblemDTO): Promise<Problem>;
  getByTitle(title: string): Promise<Problem | undefined>;
  getAll(): Promise<Problem[]>;
  getById(id: string): Promise<Problem | undefined>;
  getByCategory(category_id: string): Promise<Problem[] | undefined>;
}