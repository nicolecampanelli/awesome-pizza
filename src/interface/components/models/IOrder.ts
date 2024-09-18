export interface IOrder {
  id: string
  pizzaName: string
  quantity: number
  totalPrice: number
  deliveryData: {
    name: string
    address: string
    phone: string
  }
  status: Status
}

export interface DeliveryData {
  name: string
  address: string
  phone: string
}

export interface IChefOrder {
  id: string
  pizzaName: string
  quantity: number
  totalPrice: number
  deliveryData: DeliveryData
  status: Status
}

export type Status = 'Received' | 'In Progress' | 'Completed' | 'Cancelled'
export type SelectStatus = 'Received' | 'In Progress' | 'Completed'