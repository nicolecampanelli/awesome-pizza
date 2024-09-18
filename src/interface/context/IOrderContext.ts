import { Dispatch, SetStateAction } from 'react'
import { IChefOrder, Status } from '../components/models/IOrder'

export interface IOrderContext {
  orders: IChefOrder[]
  setOrders: Dispatch<SetStateAction<IChefOrder[]>>
  addOrder: (order: IChefOrder) => void
  updateOrderStatus: (id: string, status: Status) => void
  deleteOrder: (id: string) => void
}