'use server'
import { ReactElement } from 'react'
import { getAllOrders } from '@/services/orders/OrderService'
import { IOrder } from '@/interface/components/models/IOrder'
import ChefOrdersPageClient from '@/components/pages/ChefOrdersPageClient'

const ChefOrdersPageServer = async (): Promise<ReactElement> => {
  let orders: IOrder[] = []
  let error = ''

  await getAllOrders()
    .then((res) => {
      orders = res.data
    })
    .catch(() => {
      error = 'Failed to fetch orders'
    })

  return <ChefOrdersPageClient orders={orders} error={error} />
}

export default ChefOrdersPageServer
