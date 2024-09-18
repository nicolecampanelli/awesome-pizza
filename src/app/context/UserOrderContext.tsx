'use client'
import { IPizzaSummary } from '@/interface/components/models/IPizza'
import { IUserOrderContext } from '@/interface/context/IUserOrderContext'
import { createContext, useContext, useState, ReactNode } from 'react'

const UserOrderContext = createContext<IUserOrderContext | undefined>(undefined)

export const useUserOrder = (): IUserOrderContext => {
  const context = useContext(UserOrderContext)
  if (!context) {
    throw new Error('useUserOrder must be used within a UserOrderProvider')
  }
  return context
}

export const UserOrderProvider = ({ children }: { children: ReactNode }) => {
  const [userOrder, setUserOrder] = useState<IPizzaSummary[]>([])

  const addToOrder = (pizza: IPizzaSummary): void => {
    setUserOrder((prevOrder) => {
      const pizzaIndex = prevOrder.findIndex(
        (item) => item.pizzaName === pizza.pizzaName
      )

      if (pizzaIndex > -1) {
        const updatedOrder = [...prevOrder]
        updatedOrder[pizzaIndex] = {
          ...updatedOrder[pizzaIndex],
          quantity: updatedOrder[pizzaIndex].quantity + 1,
          totalPrice: updatedOrder[pizzaIndex].totalPrice + pizza.totalPrice,
        }
        return updatedOrder
      } else {
        return [...prevOrder, { ...pizza, quantity: 1 }]
      }
    })
  }

  const removeFromOrder = (pizzaName: string): void => {
    setUserOrder((prevOrder) => {
      const updatedOrder = prevOrder
        .map((pizza) => {
          if (pizza.pizzaName === pizzaName) {
            const newQuantity = pizza.quantity - 1
            return newQuantity > 0
              ? {
                  ...pizza,
                  quantity: newQuantity,
                  totalPrice: pizza.totalPrice - pizza.totalPrice / pizza.quantity,
                }
              : null
          }
          return pizza
        })
        .filter((pizza) => pizza !== null) as IPizzaSummary[]
      return updatedOrder
    })
  }

  const clearOrder = (): void => {
    setUserOrder([])
  }

  return (
    <UserOrderContext.Provider value={{ userOrder, addToOrder, removeFromOrder, clearOrder }}>
      {children}
    </UserOrderContext.Provider>
  )
}
