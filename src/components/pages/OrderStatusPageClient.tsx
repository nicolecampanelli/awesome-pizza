'use client'

import { useOrders } from '@/app/context/OrdersContext'
import OrderStatusActions from '@/components/actions/OrderStatusActions'
import UserOrderCard from '@/components/cards/UserOrderCard'
import { IOrder } from '@/interface/components/models/IOrder'
import { IOrderStatusPageClient } from '@/interface/components/pages/IOrderStatusPageClient'
import { getStatusColor } from '@/utils/Utils'
import { useEffect, useState, useCallback, ReactElement } from 'react'


const OrderStatusPageClient = ({ id }: IOrderStatusPageClient): ReactElement => {
  const { orders, updateOrderStatus } = useOrders()
  const [currentOrder, setCurrentOrder] = useState<any>()

  const findOrder = useCallback(() => {
    if (id) {
      const foundOrder = orders.find(order => order.id === id)
      if (foundOrder) {
        setCurrentOrder(foundOrder)
      }
    }
  }, [orders, id])

  useEffect(() => {
    findOrder()
  }, [findOrder])

  return (
    <>
      <UserOrderCard order={currentOrder} getStatusColor={getStatusColor} />
      <OrderStatusActions order={currentOrder} updateOrderStatus={updateOrderStatus} />
    </>
  )
}

export default OrderStatusPageClient
