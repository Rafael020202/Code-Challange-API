import { MongoDb } from '@shared/infra/db';
import { LoadCategoriesRepository } from '@modules/category/data/protocols';


export class CategoryMongoRepository implements LoadCategoriesRepository {
  public async loadAll(): Promise<LoadCategoriesRepository.Result> {
    const collection = MongoDb.getCollection('categories');

    return collection.find({}, { projection: { _id: 0 } }).toArray() as any;
  }
}