import mongoose from 'mongoose';
import { dbConfig } from '../src/configs/db';
import { saveShelvesService } from "../src/service/warehouseService";
import { Shelf } from "../src/dao/shelfDoa"
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

beforeEach (async () => {
    const collections = await mongoose.connection.db.collections();
    for (const collection of collections) {
        await collection.deleteMany({});
    }
})

jest.setTimeout(20000);


describe('test warehouse service', () => {

    test('canNotSaveDuplicateShelves', async () => {
        const shelfAObj: IShelf = { 
            shelfId: "1",
            name: "shelf1",
            zoneId: "12",
            warehouseId: "13"
        }
        const shelfDocument = new Shelf(shelfAObj)
        await shelfDocument.save();
        const {status, message} = await saveShelvesService(shelfAObj.warehouseId, 
            shelfAObj.zoneId, {"1": "shelf1"})
        expect(status).not.toBeTruthy();
    });
    
    test('canSaveShelves', async () => {
        const shelfBObj: IShelf = { 
            shelfId: "2",
            name: "shelf2",
            zoneId: "12",
            warehouseId: "13"
        }
        const shelfDocument = new Shelf(shelfBObj)
        const {status, message} = await saveShelvesService(shelfBObj.warehouseId, 
            shelfBObj.zoneId, {"2": "shelf2"})
        console.log(message)
        expect(status).toBeTruthy();
    });


    
  });