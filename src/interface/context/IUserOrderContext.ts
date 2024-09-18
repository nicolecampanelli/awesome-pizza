import { IPizzaSummary } from '../components/models/IPizza'

export interface IUserOrderContext {
  userOrder: IPizzaSummary[]
  addToOrder: (pizza: IPizzaSummary) => void
  removeFromOrder: (pizzaName: string) => void
  clearOrder: () => void
}