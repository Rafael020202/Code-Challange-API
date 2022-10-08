import IProblemDTO from '../dtos/IProblemDTO';
import Problem from '../infra/typeorm/entities/Problem';

export default interface IProblemRepository {
  create(data: IProblemDTO): Promise<Problem>;
  getByTitle(title: string): Promise<Problem | undefined>;
  getAll(user_id: number): Promise<Problem[]>;
  getById(id: number): Promise<Problem | undefined>;
  getByCategory(category_id: number): Promise<Problem[] | undefined>;
}
