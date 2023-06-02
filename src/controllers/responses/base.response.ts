export interface BaseResponse<T> {
  msg: string;
  data?: T;
}
