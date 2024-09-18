import { IOrder, Status } from '@/interface/components/models/IOrder'

export interface IUserOrderCard {
  order: IOrder
  getStatusColor: (status: Status) => string
}