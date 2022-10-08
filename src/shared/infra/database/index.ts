import { createConnection } from 'typeorm';
import MongoDb from './mongodb';

createConnection();
MongoDb.connect();
