import mongoose from "mongoose";
import request from "supertest";
import { dbConfig } from "../src/configs/db";
import { app } from "../src/app";

beforeAll(async () => {
  await mongoose.connect(
    `mongodb://${dbConfig.dbHost}:${dbConfig.dbPort}/${dbConfig.testDbDatabase}`,
    {
      authSource: dbConfig.dbAuthSource,
      user: dbConfig.dbUsername,
      pass: dbConfig.dbPassword,
      serverSelectionTimeoutMS: 1000,
    }
  );
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (const collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});

jest.setTimeout(20000);

describe("test warehouse controller", () => {
  test("canReturn200StatusCodeIfSuccess", async () => {
    const res = await request(app)
      .post("/api/warehouseZone")
      .send({
        warehouseId: "5",
        zoneId: "4",
        shelfNames: {
          "3": "shelf3",
          "2": "shelf2",
        },
      });
    expect(res.statusCode).toEqual(200);
  });

  test("canReturn400StatusCodeIfDuplicateRecords", async () => {
    const res1 = await request(app)
      .post("/api/warehouseZone")
      .send({
        warehouseId: "5",
        zoneId: "4",
        shelfNames: {
          "6": "shelf6",
          "7": "shelf7",
        },
      });

    const res2 = await request(app)
      .post("/api/warehouseZone")
      .send({
        warehouseId: "5",
        zoneId: "4",
        shelfNames: {
          "6": "shelf6",
          "7": "shelf7",
        },
      });
    // console.log(res2)
    expect(res2.statusCode).toEqual(400);
  });
});
