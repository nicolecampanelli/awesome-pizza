'use client'
import { useOrders } from '@/app/context/OrdersContext'
import OrderStatusActions from '@/components/actions/OrderStatusActions'
import UserOrderCard from '@/components/cards/UserOrderCard'
import { IOrder } from '@/interface/components/models/IOrder'
import { getStatusColor } from '@/utils/Utils'
import { useParams } from 'next/navigation'
import { useEffect, useState, useCallback, ReactElement } from 'react'

const OrderStatusPage = (): ReactElement => {
  const { orders, updateOrderStatus } = useOrders()
  const { id } = useParams()
  const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null)
  const [loading, setLoading] = useState(true)

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
    return <p>Loading...</p>
  }

  if (!currentOrder) {
    return <p>Order not found.</p>
  }

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-8'>Order Status</h1>
      <UserOrderCard order={currentOrder} getStatusColor={getStatusColor} />
      <OrderStatusActions order={currentOrder} updateOrderStatus={updateOrderStatus} />
    </div>
  )
}

export default OrderStatusPage
