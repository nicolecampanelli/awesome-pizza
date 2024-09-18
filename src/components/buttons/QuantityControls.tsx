import { IQuantityControls } from '@/interface/components/buttons/IQuantityControls'
import { CustomButton } from '../buttons/CustomButton'
import { ReactElement } from 'react'

const QuantityControls = ({
  quantity,
  handleAddPizza,
  handleRemovePizza,
}: IQuantityControls): ReactElement => {

  return (
    <div className='px-6 pt-4 pb-2 flex justify-center items-center space-x-4'>
      {quantity > 0 ? (
        <div className='flex items-center space-x-2'>
          <CustomButton
            label='-'
            buttonCallback={handleRemovePizza}
            customClassname='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-3 rounded'
          />
          <span>{quantity}</span>
          <CustomButton
            buttonCallback={handleAddPizza}
            label='+'
            customClassname='bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-3 rounded'
          />
        </div>
      ) : (
        <CustomButton
          buttonCallback={handleAddPizza}
          customClassname='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded'
          label='Add to Order'
        />
      )}
    </div>
  )
}

export default QuantityControls
