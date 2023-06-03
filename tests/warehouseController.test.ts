import mongoose from 'mongoose';
import { dbConfig } from '../src/configs/db';
import { IShelf } from '../src/model/shelf';

beforeAll(async () => {
    await mongoose.connect(`mongodb://${dbConfig.dbHost}:${dbConfig.dbPort}/${dbConfig.dbDatabase}`, {
      authSource: dbConfig.dbAuthSource,
      user: dbConfig.dbUsername,
      pass: dbConfig.dbPassword,
      serverSelectionTimeoutMS: 1000
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

jest.setTimeout(20000);
describe('test ShelfDao', () => {

  test('', async () => {
    
  });

});