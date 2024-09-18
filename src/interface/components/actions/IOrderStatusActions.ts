import { IOrder, Status } from '@/interface/components/models/IOrder'

export interface IOrderStatusActions {
  order: IOrder
  updateOrderStatus: (id: string, status: Status) => void
}