import { MongoDb } from '@shared/infra/db';
import { LoadCategoriesRepository } from '@modules/category/data/protocols';


export class CategoryMongoRepository implements LoadCategoriesRepository {
  public async load(data: LoadCategoriesRepository.Params): Promise<LoadCategoriesRepository.Result> {
    const collection = MongoDb.getCollection('categories');
    const search = [];

    if (data.sort) {
      search.push({
        $sort: {
          [data.sort.field]: data.sort.order === 'asc' ? 1 : -1
        }
      });
    }

    if (data.filters) {
      search.push({
        $match: data.filters
      });
    }

    if (data.limit) {
      search.push({
        $limit: data.limit
      });
    }

    search.push({
      $project: { _id: 0 }
    });

    const aggregateResult = await collection.aggregate(search).toArray();

    return aggregateResult as any;
  }
}