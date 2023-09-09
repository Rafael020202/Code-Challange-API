import { MongoClient, Collection } from 'mongodb';

import env from '@config/env';

export const MongoDb = {
  client: null as MongoClient,

  async connect(): Promise<void> {
    this.client = await MongoClient.connect(env.MONGO_URL);
  },

  async disconnect(): Promise<void> {
    await this.client.close();
    this.client = null;
  },

  getCollection(name: string): Collection {
    return this.client.db('app_db').collection(name);
  }
};
