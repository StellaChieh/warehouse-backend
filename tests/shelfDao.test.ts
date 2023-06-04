import mongoose from 'mongoose';
import { dbConfig } from '../src/configs/db';
import {findExistingShelf, saveShelves} from '../src/dao/shelfDoa'
import { IShelf } from '../src/model/shelf';

beforeAll(async () => {
    await mongoose.connect(`mongodb://${dbConfig.dbHost}:${dbConfig.dbPort}/${dbConfig.testDbDatabase}`, {
      authSource: dbConfig.dbAuthSource,
      user: dbConfig.dbUsername,
      pass: dbConfig.dbPassword,
      serverSelectionTimeoutMS: 1000
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});


beforeEach (async () => {
  const collections = await mongoose.connection.db.collections();
  for (const collection of collections) {
      await collection.deleteMany({});
  }
})


jest.setTimeout(20000);
describe('test ShelfDao', () => {

  test('canSaveANewShelfInDB', async () => {
    const newShelf: IShelf = { 
        shelfId: "1",
        name: "shelf1",
        zoneId: "12",
        warehouseId: "13"
    }

    const dbShelf: IShelf[] | null = await saveShelves([newShelf]);
    expect(dbShelf).not.toEqual(null);
    expect(dbShelf![0]).toMatchObject(newShelf);
  });

  test('canFindExistingShelfInDB', async () => {
    const newShelf2: IShelf = { 
        shelfId: "2",
        name: "shelf2",
        zoneId: "12",
        warehouseId: "13"
    }

    await saveShelves([newShelf2]);
    const existingShelf: IShelf | null = await findExistingShelf(newShelf2);
    expect(existingShelf).not.toEqual(null);
    expect(existingShelf).toMatchObject(newShelf2);
  });

  test('canNotFindUnexistingShelfInDB', async () => {
    const newShelf: IShelf = { 
        shelfId: "5",
        name: "shelf5",
        zoneId: "12",
        warehouseId: "13"
    }

    const unexistingShelf: IShelf | null = await findExistingShelf(newShelf);
    expect(unexistingShelf).toEqual(null);
    
  });
  
});