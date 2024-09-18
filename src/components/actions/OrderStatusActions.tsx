import { ReactElement, useState } from 'react'
import { deleteOrder } from '@/services/orders/OrderService'
import BaseAlert from '../alerts/BaseAlert'
import { IOrderStatusActions } from '@/interface/components/actions/IOrderStatusActions'

const OrderStatusActions = ({ order, updateOrderStatus }: IOrderStatusActions): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const handleCancelOrder = () => {
    setDeleting(true)
    deleteOrder(order.id)
      .then(() => {
        updateOrderStatus(order.id, 'Cancelled')
      })
      .catch((error) => {
        console.error('Failed to cancel order:', error)
        alert('Failed to cancel order. Please try again.')
      })
      .finally(() => {
        setDeleting(false)
      })
  }

  return (
    <div>
      {order.status === 'Received' && (
        <button
          className='mt-4 bg-red-600 text-white px-4 py-2 rounded'
          onClick={handleCancelOrder}
          disabled={deleting}
        >
          {deleting ? 'Cancelling...' : 'Cancel Order'}
        </button>
      )}

      {order.status === 'In Progress' && (
        <BaseAlert
          title='Cannot Cancel Order'
          description='This order is already in progress and cannot be cancelled.'
          triggerText='Cancel Order'
          confirmButtonText='Close'
          onConfirm={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}

export default OrderStatusActions
