'use client'

import { useUserOrder } from '@/app/context/UserOrderContext'
import { useState, useEffect, ReactElement } from 'react'
import { IPizzaCardDetail } from '@/interface/components/cards/IPizzaCard'
import { generateId } from '@/utils/Utils'
import QuantityControls from '../buttons/QuantityControls'
import PizzaDetails from '../details/PizzaDetail'

const PizzaCard = ({ pizzaName, pizzaDescription, price }: IPizzaCardDetail): ReactElement => {
  const { addToOrder, removeFromOrder, userOrder } = useUserOrder()
  const [quantity, setQuantity] = useState<number>(0)

  useEffect(() => {
    const pizzaInOrder = userOrder.find((pizza) => pizza.pizzaName === pizzaName)
    if (pizzaInOrder) {
      setQuantity(pizzaInOrder.quantity)
    } else {
      setQuantity(0)
    }
  }, [userOrder, pizzaName])

  const handleAddPizza = () => {
    addToOrder({
      id: generateId(),
      pizzaName,
      quantity: 1,
      totalPrice: price
    })
  }

  const handleRemovePizza = () => {
    removeFromOrder(pizzaName)
  }

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white p-4'>
      <PizzaDetails pizzaName={pizzaName} pizzaDescription={pizzaDescription} price={price} />
      <QuantityControls
        quantity={quantity}
        handleAddPizza={handleAddPizza}
        handleRemovePizza={handleRemovePizza}
      />
    </div>
  )
}

export default PizzaCard
