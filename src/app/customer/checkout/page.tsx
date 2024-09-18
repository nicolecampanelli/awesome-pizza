'use server'
import { ReactElement } from 'react'
import CheckoutPageClient from '@/components/pages/CheckoutPageClient'

const CheckoutPage = async (): Promise<ReactElement> => {
  return <CheckoutPageClient />
}

export default CheckoutPage
