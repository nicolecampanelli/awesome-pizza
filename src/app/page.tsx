'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import PizzaCard from '@/components/cards/PizzaCard'
import FooterComponent from '@/components/footer/FooterComponent'
import { getAllPizzas } from '@/services/pizzas/PizzaService'

const PizzaListPage = (): ReactElement => {
  const [pizzas, setPizzas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  const performGetAllPizzas = async () => {
    await getAllPizzas()
      .then((res) => {
        setPizzas(res.data)
      })
      .catch(() => {
        setError('Failed to fetch pizzas')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    performGetAllPizzas()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='flex flex-col min-h-screen pb-20'>
      <div className='flex-grow'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
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

export default PizzaListPage
