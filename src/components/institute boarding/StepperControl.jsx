import React from 'react'

const StepperControl = () => {
  return (
    <div className='flex flow-row gap-4 items-center'>
        <button className='bg-white text-primary px-6 py-2 rounded-full text-xs font-bold cursor-pointer'>
            Back
        </button>

        <button className='bg-primary text-white px-6 py-2 rounded-full text-xs font-bold cursor-pointer'>
            Next
        </button>
    </div>
  )
}

export default StepperControl