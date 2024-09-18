'use client'
import { ReactElement } from 'react'
import PizzaCard from '@/components/cards/PizzaCard'
import FooterComponent from '@/components/footer/FooterComponent'
import { IPizzaListPageClient } from '@/interface/components/pages/IPizzaListPageClient'

const PizzaListPageClient = ({ pizzas, error }: IPizzaListPageClient): ReactElement => {
  if (error) return <p>{error}</p>

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow p-4 pb-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizzaName={pizza.pizzaName}
              pizzaDescription={pizza.pizzaDescription}
              price={pizza.price}
            />
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}

export default PizzaListPageClient
