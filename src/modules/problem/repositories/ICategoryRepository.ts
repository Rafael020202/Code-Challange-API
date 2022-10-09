import { Category } from '../entities';

export interface ICategoryRepository {
  getAll(): Promise<Category[]>;
  getById(id: number): Promise<Category>;
}
