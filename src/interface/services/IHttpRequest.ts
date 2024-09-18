export interface IBasicHttpRequest {
  url: string
  withCredentials?: boolean
}

export interface IFullHttpRequest extends IBasicHttpRequest {
  payload: any
  config?: any
}