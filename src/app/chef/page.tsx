'use client'
import { useOrders } from '../context/OrdersContext'
import { getAllOrders, updateOrderStatus } from '@/services/orders/OrderService'
import { ReactElement, useEffect, useState } from 'react'
import { IOrder, SelectStatus } from '@/interface/components/models/IOrder'
import OrderTable from '@/components/tables/OrderTable'
import PizzaLoader from '@/components/loader/PizzaLoader'

const ChefOrdersPage = (): ReactElement => {
  const { orders: contextOrders, updateOrderStatus: updateOrderStatusInContext } = useOrders()
  const [orders, setOrders] = useState<IOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const [selectedStatuses, setSelectedStatuses] = useState<{ [key: string]: string }>({})
  const receivedOrders = orders.filter(order => order.status === 'Received')
  const inProgressOrders = orders.filter(order => order.status === 'In Progress')
  const completedOrders = orders.filter(order => order.status === 'Completed')

  const performGetAllOrders = async () => {
    await getAllOrders()
    .then((res) => {
      const combinedOrders = [...res.data, ...contextOrders]
      const uniqueOrders = Array.from(new Set(combinedOrders.map((order) => order.id))).map((id) =>
        combinedOrders.find((order) => order.id === id)
      )

      setOrders(uniqueOrders as IOrder[])

      const initialStatuses = uniqueOrders.reduce((acc: any, order: IOrder) => {
        acc[order.id] = order.status
        return acc
      }, {} as { [key: string]: string })

      setSelectedStatuses(initialStatuses)
    })
    .catch((err) => {
      setError('Failed to fetch orders')
      console.error(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    performGetAllOrders()
  }, [])

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
        setOrders(prevOrders => prevOrders.map(order => {
          if (order.id === orderId) {
            return { ...order, status: value }
          }
          return order
        }))
        updateOrderStatusInContext(orderId, value)
      })
      .catch(err => {
        console.error('Failed to update order status:', err)
        setError('Failed to update order status')
      })
  }

  if (loading) return <PizzaLoader />
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

export default ChefOrdersPage
