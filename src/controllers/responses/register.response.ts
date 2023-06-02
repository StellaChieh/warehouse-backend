import { BaseResponse } from "./base.response";

export interface RegisterResponseData {
  token: string;
}

export type RegisterResponse = BaseResponse<RegisterResponseData>;
