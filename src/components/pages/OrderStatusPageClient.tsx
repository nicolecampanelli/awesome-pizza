'use client'

import { useOrders } from '@/app/context/OrdersContext'
import OrderStatusActions from '@/components/actions/OrderStatusActions'
import UserOrderCard from '@/components/cards/UserOrderCard'
import PizzaLoader from '@/components/loader/PizzaLoader'
import { IOrder } from '@/interface/components/models/IOrder'
import { IOrderStatusPageClient } from '@/interface/components/pages/IOrderStatusPageClient'
import { getStatusColor } from '@/utils/Utils'
import { useEffect, useState, useCallback, ReactElement } from 'react'


const OrderStatusPageClient = ({ id }: IOrderStatusPageClient): ReactElement => {
  const { orders, updateOrderStatus } = useOrders()
  const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null)
  const [loading, setLoading] = useState(true)

  // Callback to find the order
  const findOrder = useCallback(() => {
    if (id) {
      const foundOrder = orders.find(order => order.id === id)
      if (foundOrder) {
        setCurrentOrder(foundOrder)
      }
    }
    setLoading(false)
  }, [orders, id])

  useEffect(() => {
    findOrder()
  }, [findOrder])

  if (loading) {
    return <PizzaLoader />
  }

  if (!currentOrder) {
    return <p>Order not found.</p>
  }

  return (
    <>
      <UserOrderCard order={currentOrder} getStatusColor={getStatusColor} />
      <OrderStatusActions order={currentOrder} updateOrderStatus={updateOrderStatus} />
    </>
  )
}

export default OrderStatusPageClient
