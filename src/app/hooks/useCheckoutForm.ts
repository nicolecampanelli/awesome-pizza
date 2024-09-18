import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutFormValues, checkoutSchema } from '../schemas/checkout.schema'

export const useCheckoutForm = () => {
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: '',
      address: '',
      phone: '',
      cardNumber: '',
      expiration: '',
      cvv: ''
    }
  })

  return form
}
