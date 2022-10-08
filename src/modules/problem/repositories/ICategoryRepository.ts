import Category from '../infra/database/mongodb/entities/Category';

export default interface ICategoryRepository {
  getAll(): Promise<Category[]>;
  getById(id: number): Promise<Category>;
}
