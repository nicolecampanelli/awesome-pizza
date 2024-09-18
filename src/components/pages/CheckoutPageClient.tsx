'use client'
import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useOrders } from '@/app/context/OrdersContext'
import { useUserOrder } from '@/app/context/UserOrderContext'
import OrderSummary from '@/components/sections/OrderSummary'
import DeliveryForm from '@/components/sections/forms/DeliveryForm'
import PaymentForm from '@/components/sections/forms/PaymentForm'
import { CheckoutFormValues } from '@/app/schemas/checkout.schema'
import { ReactElement } from 'react'
import { CustomButton } from '@/components/buttons/CustomButton'
import { useCheckoutForm } from '@/app/hooks/useCheckoutForm'
import { createOrder } from '@/services/orders/OrderService'
import { IOrder } from '@/interface/components/models/IOrder'

const CheckoutClient = (): ReactElement => {
  const { userOrder, clearOrder } = useUserOrder()
  const { addOrder } = useOrders()
  const router = useRouter()
  const form = useCheckoutForm()

  const totalPrice = userOrder.reduce((total, pizza) => total + pizza.totalPrice, 0)

  const onSubmit = (data: CheckoutFormValues) => {
    const orderData: IOrder = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      pizzaName: userOrder.map((pizza) => pizza.pizzaName).join(', '),
      quantity: userOrder.reduce((total, pizza) => total + pizza.quantity, 0),
      totalPrice,
      deliveryData: {
        name: data.name,
        address: data.address,
        phone: data.phone,
      },
      status: 'Received',
    }

    createOrder(orderData)
      .then(() => {
        addOrder(orderData)
        clearOrder()
        router.push(`/customer/order-status/${orderData.id}`)
      })
      .catch((err) => {
        console.error('Error creating order:', err)
      })
  }

  return (
    <div className='container mx-auto py-4'>
      <h1 className='text-2xl font-bold mb-4'>Checkout</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <OrderSummary userOrder={userOrder} totalPrice={totalPrice} />

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className=''>
              <DeliveryForm form={form} />
              <PaymentForm form={form} />
            </div>
            <div className='flex justify-end'>
              <CustomButton
                type='submit'
                customClassname='bg-red-600 px-6 py-4 text-lg'
                label='Place Order'
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default CheckoutClient
