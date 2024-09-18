'use client'
import { ReactElement, useState } from 'react'
import { IOrder, SelectStatus } from '@/interface/components/models/IOrder'
import OrderTable from '@/components/tables/OrderTable'
import { updateOrderStatus } from '@/services/orders/OrderService'
import { useOrders } from '@/app/context/OrdersContext'
import { IChefOrdersPageClient } from '@/interface/components/pages/IChefOrdersPageClient'

const ChefOrdersPageClient = ({ orders: initialOrders, error }: IChefOrdersPageClient): ReactElement => {
  const { updateOrderStatus: updateOrderStatusInContext } = useOrders()
  const [orders, setOrders] = useState<IOrder[]>(initialOrders)
  const [selectedStatuses, setSelectedStatuses] = useState<{ [key: string]: string }>(
    initialOrders.reduce((acc, order) => {
      acc[order.id] = order.status
      return acc
    }, {} as { [key: string]: string })
  )

  const receivedOrders = orders.filter(order => order.status === 'Received')
  const inProgressOrders = orders.filter(order => order.status === 'In Progress')
  const completedOrders = orders.filter(order => order.status === 'Completed')

  const handleStatusChange = (orderId: string, value: SelectStatus) => {
    if (value === 'In Progress') {
      const inProgressOrder = orders.find(order => order.status === 'In Progress')
      if (inProgressOrder && inProgressOrder.id !== orderId) {
        alert('Only one order can be In Progress at a time.')
        return
      }
    }

    setSelectedStatuses(prev => ({
      ...prev,
      [orderId]: value,
    }))

    updateOrderStatus(orderId, value)
      .then(() => {
        setOrders(prevOrders =>
          prevOrders.map(order => {
            if (order.id === orderId) {
              return { ...order, status: value }
            }
            return order
          })
        )
        updateOrderStatusInContext(orderId, value)
      })
      .catch(err => {
        console.error('Failed to update order status:', err)
      })
  }

  if (error) return <p>{error}</p>

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Orders List</h1>
      <OrderTable
        title='Received Orders'
        orders={receivedOrders}
        selectedStatuses={selectedStatuses}
        handleStatusChange={handleStatusChange}
      />
      <OrderTable
        title='In Progress Orders'
        orders={inProgressOrders}
        selectedStatuses={selectedStatuses}
        handleStatusChange={handleStatusChange}
      />
      <OrderTable
        title='Completed Orders'
        orders={completedOrders}
        selectedStatuses={selectedStatuses}
        handleStatusChange={handleStatusChange}
      />
    </div>
  )
}

export default ChefOrdersPageClient
