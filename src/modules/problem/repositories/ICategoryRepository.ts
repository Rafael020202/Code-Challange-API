import { Category } from '@modules/problem/models';

export interface ICategoryRepository {
  getAll(): Promise<Category[]>;
  getById(id: number): Promise<Category>;
}
