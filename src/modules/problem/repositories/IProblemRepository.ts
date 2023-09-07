import { ICreateProblemDTO } from '@modules/problem/dtos';
import { Problem } from '@modules/problem/models';

export interface IProblemRepository {
  create(data: ICreateProblemDTO): Promise<Problem>;
  getAll(user_id: string): Promise<Problem[]>;
  getById(id: string): Promise<Problem | undefined>;
  getByCategory(category_id: number): Promise<Problem[] | undefined>;
}
