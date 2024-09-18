import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'
import { SelectStatus } from '@/interface/components/models/IOrder'
import { IOrderStatusSelect } from '@/interface/components/select/IOrderStatusSelect'
import { ReactElement } from 'react'

const OrderStatusSelect= ({ orderId, currentStatus, onChange }: IOrderStatusSelect): ReactElement => {
  return (
    <Select
      value={currentStatus}
      onValueChange={(status) => onChange(orderId, status as SelectStatus)}
    >
      <SelectTrigger className='border border-gray-300 rounded p-1 text-center flex justify-center items-center'>
        <span className='text-center'>{currentStatus}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='Received'>Received</SelectItem>
        <SelectItem value='In Progress'>In Progress</SelectItem>
        <SelectItem value='Completed'>Completed</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default OrderStatusSelect
