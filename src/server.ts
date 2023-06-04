import http from "http";
import * as mongoose from "mongoose";

import { app } from "./app";

import { envOrFail } from "./utils/env";

import { dbConfig } from "./configs/db";
import { serverConfig } from "./configs/server";

const server = http.createServer(app);

server.listen(serverConfig.serverPort, async () => {
  await mongoose.connect(
    `mongodb://${dbConfig.dbHost}:${dbConfig.dbPort}/${dbConfig.dbDatabase}`,
    {
      authSource: dbConfig.dbAuthSource,
      user: dbConfig.dbUsername,
      pass: dbConfig.dbPassword,
    }
  );
  console.log("DB Connection has been established successfully.");
  console.log(
    `------- Server started on port ${serverConfig.serverPort} ------`
  );
  console.log(`------- Current environment ${envOrFail("NODE_ENV")} ------`);
});
