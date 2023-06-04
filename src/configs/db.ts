import { envOrFail } from "../utils/env";

export const dbConfig = {
  dbHost: envOrFail("DB_HOST"),
  dbPort: envOrFail("DB_PORT"),
  dbAuthSource: envOrFail("DB_AUTH_SOURCE"),
  dbDatabase: envOrFail("DB_NAME"),
  testDbDatabase: envOrFail("DB_TEST_NAME"),
  dbUsername: envOrFail("DB_USER"),
  dbPassword: envOrFail("DB_PASSWORD"),
};
