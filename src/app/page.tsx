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
    await getAllPizzas().then((res) => {
      setPizzas(res.data)
      console.log(res.data)
    }).catch((err) => {
      setError('Failed to fetch pizzas')
    }).finally(() => {
      setLoading(false)
    })

  }

  useEffect(() => {
    performGetAllPizzas()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {pizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          pizzaName={pizza.pizzaName}
          pizzaDescription={pizza.pizzaDescription}
          price={pizza.price}
        />
      ))}
      <FooterComponent />
    </div>

  )
}

export default PizzaListPage
