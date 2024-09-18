import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import OrderStatusSelect from '../select/OrderStatusSelect'
import { IOrderTable } from '@/interface/components/tables/IOrderTable'
import { ReactElement } from 'react'

const OrderTable = ({ title, orders, selectedStatuses, handleStatusChange }: IOrderTable): ReactElement => {
  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <Table className='min-w-full bg-white border border-gray-200'>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>Order ID</TableHead>
            <TableHead className='text-center'>Pizza Name</TableHead>
            <TableHead className='text-center'>Quantity</TableHead>
            <TableHead className='text-center'>Total Price</TableHead>
            <TableHead className='text-center'>Delivery Name</TableHead>
            <TableHead className='text-center'>Status</TableHead>
            <TableHead className='text-center'>Update Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className='hover:bg-gray-50 text-center'>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.pizzaName}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>${order.totalPrice.toFixed(2)}</TableCell>
              <TableCell>{order.deliveryData.name}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <OrderStatusSelect
                  orderId={order.id}
                  currentStatus={selectedStatuses[order.id]}
                  onChange={handleStatusChange}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OrderTable
