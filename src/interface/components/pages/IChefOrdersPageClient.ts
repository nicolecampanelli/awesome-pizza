import { IOrder } from '../models/IOrder'

export interface IChefOrdersPageClient {
  orders: IOrder[]
  error: string
}