'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { ReactElement, useEffect, useState } from 'react'
import { GiFullPizza } from 'react-icons/gi'
import { useOrders } from '@/app/context/OrdersContext'

const Navbar = (): ReactElement | null => {
  const [mounted, setMounted] = useState(false)
  const { orders } = useOrders()
  const latestOrder = orders[orders.length - 1]
  const latestOrderId = latestOrder ? latestOrder.id : null

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null


  return (
    <NavigationMenu.Root className='bg-red-600 text-white shadow-md py-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <NavigationMenu.List className='text-lg font-bold'>
          <Link href='/' className='flex items-center space-x-2'>
            <GiFullPizza size={24} />
            Awesome Pizza
          </Link>
        </NavigationMenu.List>

        <NavigationMenu.List className='flex space-x-6'>
          <NavigationMenu.Item>
            <Link href={latestOrderId ? `/customer/order-status/${latestOrderId}` : '/order'}>
              <span className='hover:text-gray-300'>My Order</span>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href='/chef'>
              <span className='hover:text-gray-300'>Chef Area</span>
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  )
}

export default Navbar
