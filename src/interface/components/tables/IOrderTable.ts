import { IOrder, SelectStatus } from '@/interface/components/models/IOrder'

export interface IOrderTable {
  title: string
  orders: IOrder[]
  selectedStatuses: { [key: string]: string }
  handleStatusChange: (orderId: string, status: SelectStatus) => void
}