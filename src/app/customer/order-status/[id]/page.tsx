'use server'
import OrderStatusPageClient from '@/components/pages/OrderStatusPageClient'
import { IOrderStatusPageClient } from '@/interface/components/pages/IOrderStatusPageClient'

const OrderStatusPageServer = ({ id }: IOrderStatusPageClient) => {

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-8'>Order Status</h1>
      {/* Pass the ID to the client component */}
      <OrderStatusPageClient id={id} />
    </div>
  )
}

export default OrderStatusPageServer
