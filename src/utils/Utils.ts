export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Received':
      return 'text-yellow-600'
    case 'In Progress':
      return 'text-blue-600'
    case 'Completed':
      return 'text-green-600'
    case 'Cancelled':
      return 'text-red-600'
    default:
      return 'text-gray-600'
  }
}

export const generateId = (): string => (
  `${Date.now()}-${Math.floor(Math.random() * 1000)}`
)
