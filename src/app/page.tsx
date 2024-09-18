// src/pages/pizza-list.tsx
import { ReactElement } from 'react'
import { getAllPizzas } from '@/services/pizzas/PizzaService'
import { IPizza } from '@/interface/components/models/IPizza'
import PizzaListPageClient from '@/components/pages/PizzaListPageClient'

export const dynamic = 'force-dynamic' // Optional: To ensure SSR

const PizzaListPage = async (): Promise<ReactElement> => {
  let pizzas: IPizza[] = []
  let error = ''

  await getAllPizzas()
    .then((res) => {
      pizzas = res.data
    })
    .catch(() => {
      error = 'Failed to fetch pizzas'
    })

  return <PizzaListPageClient pizzas={pizzas} error={error} />
}

export default PizzaListPage
