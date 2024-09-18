import { AxiosInstance } from 'axios'
import { RestApiClient, RestApiNoCredentialClient } from './axios/AxiosClient'
import { IBasicHttpRequest, IFullHttpRequest } from '@/interface/services/IHttpRequest'

const getRestClient = (withCredentials: boolean): AxiosInstance => {
  return withCredentials ? RestApiClient : RestApiNoCredentialClient
}

export const httpGet = async ({ url, withCredentials = true }: IBasicHttpRequest): Promise<any> => {
  const restClient = getRestClient(withCredentials)
  return await restClient.get(url)
}

export const httpPost = async ({ url, payload, config = {}, withCredentials = true }: IFullHttpRequest): Promise<any> => {
  const restClient = getRestClient(withCredentials)
  return await restClient.post(url, payload, config)
}

export const httpPut = async ({ url, payload, config = {}, withCredentials = true }: IFullHttpRequest): Promise<any> => {
  const restClient = getRestClient(withCredentials)
  return await restClient.put(url, payload, config)
}

export const httpPatch = async ({ url, payload, config = {}, withCredentials = true }: IFullHttpRequest): Promise<any> => {
  const restClient = getRestClient(withCredentials)
  return await restClient.patch(url, payload, config)
}

export const httpDelete = async ({ url, withCredentials = true }: IBasicHttpRequest): Promise<any> => {
  const restClient = getRestClient(withCredentials)
  return await restClient.delete(url)
}
