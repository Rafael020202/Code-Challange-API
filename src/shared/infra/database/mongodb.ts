import mongodb, { MongoClient, Collection } from 'mongodb';
import chalk from 'chalk';

class MongoDb {
  private static db: mongodb.Db;
  private static client: any;
  private static collections: any = {};

  public static async connect() {
    if (this.db) return;

    const {
      MONGODB_USER: user,
      MONGODB_PASSWORD: password,
      MONGODB_DB: db
    } = process.env;

    try {
      this.client = await MongoClient.connect(
        `mongodb+srv://${encodeURIComponent(user)}:${encodeURIComponent(
          password
        )}@cluster0.ajqso.mongodb.net/${db}?retryWrites=true&w=majority`,
        {
          maxIdleTimeMS: 100,
          maxConnecting: 1
        }
      );

      this.db = this.client.db(db);

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
