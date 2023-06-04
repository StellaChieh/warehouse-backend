import { env } from "../utils/env";

export const serverConfig = {
  serverPort: env("PORT", "8080"),
};
