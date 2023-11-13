import { MongoDb } from '@shared/infra/db';
import {
  LoadCategoriesRepository,
  LoadCategoryByIdRepository
} from '@modules/category/data/protocols';

export class CategoryMongoRepository implements LoadCategoryByIdRepository {
  public async loadAll(): Promise<LoadCategoriesRepository.Result> {
    const collection = MongoDb.getCollection('categories');

    return collection.find({}, { projection: { _id: 0 } }).toArray() as any;
  }

  public async loadById(
    id: number
  ): Promise<LoadCategoryByIdRepository.Result> {
    const collection = MongoDb.getCollection('categories');

    return collection.findOne({ id }, { projection: { _id: 0 } }) as any;
  }
}
