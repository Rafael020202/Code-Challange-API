import { getRepository, Repository } from 'typeorm';
import ICategoryRepository from '../../../repositories/ICategoryRepository';
import Category from '../entities/Category';

export default class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async getAll(): Promise<Category[]> {
    return await this.ormRepository.find();
  }

  public async getById(id: number): Promise<Category> {
    return await this.ormRepository.findOne({
      where: { id },
      relations: ['problems']
    });
  }
}
