import { ReactElement } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ICheckoutForms } from '@/interface/components/sections/forms/ICheckoutForms'

const DeliveryForm = ({ form }: ICheckoutForms): ReactElement => {
  return (
    <section className='bg-white shadow-md rounded-lg p-4 m-1'>
      <h2 className='text-xl font-semibold mb-4'>Delivery Information</h2>
      <Form {...form}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className='h-8 text-base' placeholder='John Doe' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input className='h-8 text-base' placeholder='123 Pizza St' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input className='h-8 text-base' placeholder='1234567890' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </section>
  )
}

export default DeliveryForm
