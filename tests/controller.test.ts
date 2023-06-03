import mongoose from 'mongoose';
import { dbConfig } from '../src/configs/db';
import {findExistingShelf, saveShelves} from '../src/dao/shelfDoa'
import { IShelf } from '../src/common/shelf';

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