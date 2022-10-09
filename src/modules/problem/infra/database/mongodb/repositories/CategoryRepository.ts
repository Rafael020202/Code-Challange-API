import MongoDb from '@shared/infra/database/mongodb';

import { ICategoryRepository } from '@modules/problem/repositories';
import { Category } from '../entities';

export class CategoryRepository implements ICategoryRepository {
  private repository = MongoDb.getCollection('categories');

  public async getAll(): Promise<Category[]> {
    const result = await this.repository.find();
    const categories = result.map((value) => new Category(value));

    return categories.toArray();
  }

  public async getById(id: number): Promise<Category> {
    const category = this.repository.findOne({ category_id: id });

    return new Category(category);
  }
}
