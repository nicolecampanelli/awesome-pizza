import { IPizzaSummary } from '@/interface/components/models/IPizza'

export interface ISummary {
  userOrder: IPizzaSummary[]
  totalPrice: number
}