import { BaseResponse } from "./base.response";

export interface LoginResponseData {
  token: string;
  preferences: [string];
}

export type LoginResponse = BaseResponse<LoginResponseData>;
