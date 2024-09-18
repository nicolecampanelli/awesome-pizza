import { SelectStatus } from '@/interface/components/models/IOrder'

export interface IOrderStatusSelect {
  orderId: string
  currentStatus: string
  onChange: (orderId: string, status: SelectStatus) => void
}