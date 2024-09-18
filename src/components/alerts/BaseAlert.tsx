import { 
  AlertDialog, 
  AlertDialogTrigger, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogCancel 
} from '@/components/ui/alert-dialog'
import { IBaseAlert } from '@/interface/components/alerts/IBaseAlert'
import { ReactElement } from 'react'

const BaseAlert = ({
  title,
  description,
  triggerText,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  onConfirm,
  onCancel,
  isOpen,
  setIsOpen,
}: IBaseAlert): ReactElement => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <button
          className='bg-red-600 text-white px-4 py-2 rounded'
          onClick={() => setIsOpen(true)}
        >
          {triggerText}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-white text-black rounded-lg p-6 shadow-lg'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-xl font-semibold'>{title}</AlertDialogTitle>
          <AlertDialogDescription className='text-gray-700'>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <button
              className='bg-blue-600 text-white px-4 py-2 rounded'
              onClick={() => {
                setIsOpen(false)
                if (onCancel) onCancel()
              }}
            >
              {cancelButtonText}
            </button>
          </AlertDialogCancel>
          <button
            className='bg-red-600 text-white px-4 py-2 rounded'
            onClick={() => {
              setIsOpen(false)
              onConfirm()
            }}
          >
            {confirmButtonText}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default BaseAlert
