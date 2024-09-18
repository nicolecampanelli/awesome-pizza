'use client'
import { useUserOrder } from '@/app/context/UserOrderContext'
import Link from 'next/link'
import { ReactElement } from 'react'

const FooterComponent = (): ReactElement => {
  const { userOrder } = useUserOrder()

  const hasItemsInCart = userOrder.length > 0

  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='font-bold'>Total: ${userOrder.reduce((total, item) => total + item.totalPrice, 0).toFixed(2)}</span>
        <Link href='/customer/checkout'>
          <button 
            disabled={!hasItemsInCart} 
            className={`bg-red-600 text-white font-bold py-2 px-4 rounded ${!hasItemsInCart ? 'opacity-50 cursor-not-allowed' : ''}`}>
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </footer>
  )
}

export default FooterComponent
