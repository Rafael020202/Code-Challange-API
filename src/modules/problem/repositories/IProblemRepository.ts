import { ICreateProblemDTO } from '@modules/problem/dtos';
import { Problem } from '@modules/problem/entities';

export interface IProblemRepository {
  create(data: ICreateProblemDTO): Promise<Problem>;
  getAll(user_id: number): Promise<Problem[]>;
  getById(id: number): Promise<Problem | undefined>;
  getByCategory(category_id: number): Promise<Problem[] | undefined>;
}
