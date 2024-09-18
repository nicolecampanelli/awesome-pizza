import { z } from 'zod'

export const checkoutSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  phone: z.string().regex(/^\d{10}$/, { message: 'Phone number must be 10 digits.' }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: 'Card number must be 16 digits.' }),
  expiration: z.string().regex(/^\d{2}\/\d{2}$/, { message: 'Expiration date must be in MM/YY format.' }),
  cvv: z.string().length(3, { message: 'CVV must be 3 digits.' })
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>
