export interface IBaseAlert {
  title: string
  description: string
  triggerText: string
  onConfirm: () => void
  onCancel?: () => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  confirmButtonText?: string
  cancelButtonText?: string
}