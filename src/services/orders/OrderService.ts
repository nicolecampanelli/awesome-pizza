import { IOrder } from '@/interface/components/models/IOrder'
import { IBasicHttpRequest, IFullHttpRequest } from '@/interface/services/IHttpRequest'
import { httpDelete, httpGet, httpPatch, httpPost } from '@/services/rest-api/RestApi.service'

export const getAllOrders = async (): Promise<any> => {
  const url: string = 'https://awesome-pizza.free.beeceptor.com/api/orders' // Replace with your MockAPI URL
  const request: IBasicHttpRequest = { url, withCredentials: false }
  return await httpGet(request)
}

export const updateOrderStatus = async (orderId: string, status: string): Promise<any> => {
  const url: string = `https://awesome-pizza.free.beeceptor.com/api/order/${orderId}` // Replace with your MockAPI URL
  const request: IFullHttpRequest = {
    url,
    payload: JSON.stringify({ orderId, status }),
    withCredentials: false,
  }
  return await httpPatch(request)
}

export const createOrder = async (preparedOrder: IOrder): Promise<any> => {
  const url: string = `https://awesome-pizza.free.beeceptor.com/api/order` // Replace with your MockAPI URL
  const request: IFullHttpRequest = { url, payload: preparedOrder, withCredentials: false }
  return await httpPost(request)
}

export const deleteOrder = async (orderId: string): Promise<any> => {
  const url: string = `https://awesome-pizza.free.beeceptor.com/api/order/${orderId}`
  const request: IBasicHttpRequest = { url, withCredentials: false }
  return await httpDelete(request)
}
