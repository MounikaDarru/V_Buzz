import React from 'react'

import logo from '../assets/logo.png'

import Stepper from '../components/institute boarding/Stepper'
import StepperControl from '../components/institute boarding/StepperControl'

const InstituteBoarding = () => {
  return (
    <section className='bg-primary/30 font-poppins p-[30px] sm:px-8 md:p-[150px] items-center justify-center'>
        <div className='md:bg-white flex flex-col items-center justify-center md:p-[10px]'>
            {/* Stepper */}
            <div className='md:bg-primary/10 md:p-[30px] w-full flex flex-row items-center justify-center'>
                <div className="hidden md:flex items-center mr-4">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div>
                <Stepper />
            </div>
            {/* form */}
            <div className='bg-white p-[50px] w-full flex flex-col rounded-[20px] mt-6'>
                {/* component */}
                <div className='justify-end'>
                    <StepperControl />
                </div>
            </div>
        </div>
    </section>
  )
}

export default InstituteBoarding