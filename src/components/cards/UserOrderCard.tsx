import { IUserOrderCard } from '@/interface/components/cards/IUserOrderCard'
import { ReactElement } from 'react'

const UserOrderCard = ({ order, getStatusColor }: IUserOrderCard): ReactElement => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Order Summary</h2>
      <p>Pizzas: {order.pizzaName}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
      <h3 className='font-semibold'>Delivery Info:</h3>
      <p>Name: {order.deliveryData.name}</p>
      <p>Address: {order.deliveryData.address}</p>
      <p>Phone: {order.deliveryData.phone}</p>
      <p className={`font-bold ${getStatusColor(order.status)}`}>
        Status: {order.status}
      </p>
    </div>
  )
}

export default UserOrderCard
