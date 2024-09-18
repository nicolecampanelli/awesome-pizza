import { IPizzaCardDetail } from '@/interface/components/cards/IPizzaCard'
import { ReactElement } from 'react'

const PizzaDetails = ({ pizzaName, pizzaDescription, price }: IPizzaCardDetail): ReactElement => {
  return (
    <div className='px-6 py-4'>
      <div className='font-bold text-xl mb-2'>{pizzaName}</div>
      <p className='text-gray-700 text-base'>{pizzaDescription}</p>
      <p className='text-gray-700 text-base font-bold'>${price.toFixed(2)}</p>
    </div>
  )
}

export default PizzaDetails
