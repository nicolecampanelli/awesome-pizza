'use client'
import { IChefOrder, IOrder, Status } from '@/interface/components/models/IOrder'
import { IOrderContext } from '@/interface/context/IOrderContext'
import { ReactNode, createContext, useContext, useState } from 'react'

const OrdersContext = createContext<IOrderContext | undefined>(undefined)

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<IChefOrder[]>([])

  const addOrder = (order: IChefOrder): void => {
    setOrders((prevOrders) => [...prevOrders, order])
  }

  const updateOrderStatus = (id: string, status: Status): void => {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
      return updatedOrders
    })
  }

  const deleteOrder = (id: string): void => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id))
  }

  return (
    <OrdersContext.Provider value={{ orders, setOrders, addOrder, updateOrderStatus, deleteOrder }}>
      {children}
    </OrdersContext.Provider>
  )
}

export const useOrders = (): IOrderContext => {
  const context = useContext(OrdersContext)
  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider')
  }
  return context
}
