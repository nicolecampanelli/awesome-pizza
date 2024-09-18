import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ICheckoutForms } from '@/interface/components/sections/forms/ICheckoutForms'
import { ReactElement } from 'react'

const PaymentForm = ({ form }: ICheckoutForms): ReactElement => {
  return (
    <section className='bg-white shadow-md rounded-lg p-4 m-1'>
      <h2 className='text-xl font-semibold mb-4'>Payment Information</h2>
      <Form {...form}>
        <FormField
          control={form.control}
          name='cardNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input className='h-8 text-base' placeholder='1234567812345678' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='expiration'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiration Date (MM/YY)</FormLabel>
              <FormControl>
                <Input className='h-8 text-base' placeholder='12/34' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='cvv'
          render={({ field }) => (
            <FormItem>
              <FormLabel>CVV</FormLabel>
              <FormControl>
                <Input className='h-8 text-base' placeholder='123' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </section>
  )
}

export default PaymentForm
