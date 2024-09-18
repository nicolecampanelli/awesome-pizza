import { ISummary } from '@/interface/components/sections/ISummary'
import React, { ReactElement } from 'react'

const OrderSummary= ({ userOrder, totalPrice }: ISummary): ReactElement => (
  <section className='bg-white shadow-md rounded-lg p-4'>
    <h2 className='text-xl font-semibold mb-2'>Order Summary</h2>
    <ul>
      {userOrder.length > 0 ? (
        userOrder.map((pizza, index) => (
          <li key={index} className='text-sm'>
            {pizza.pizzaName} (x{pizza.quantity}) - ${pizza.totalPrice.toFixed(2)}
          </li>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </ul>
    {userOrder.length > 0 && (
      <p className='mt-2 font-bold'>Total Price: ${totalPrice.toFixed(2)}</p>
    )}
  </section>
)

export default OrderSummary
