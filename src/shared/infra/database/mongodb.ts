import mongodb, { MongoClient, Collection } from 'mongodb';
import chalk from 'chalk';

import env from '@config/env';

class MongoDb {
  private static db: mongodb.Db;
  private static client: any;
  private static collections: any = {};

  public static async connect() {
    if (this.db) return;

    try {
      this.client = await MongoClient.connect(env.MONGO_URL);

      this.db = this.client.db('app_db');

      console.log(chalk.bgGreen('MongoDb connection up'));
    } catch (err) {
      console.error(err);
    }
  }

  public static getCollection(collection: string): Collection {
    if (!this.collections[collection]) {
      this.collections[collection] = MongoDb.db.collection(collection);
    }

    return this.collections[collection];
  }
}

export default MongoDb;
