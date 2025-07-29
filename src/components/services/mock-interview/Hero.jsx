import React from 'react'
import Button from '../../Button';

import partner1 from '../../../assets/partner1.png'
import partner2 from '../../../assets/partner2.png'
import partner3 from '../../../assets/partner3.png'

const partners = [
    {
        id: 1,
        category: "University Partners",
        image: partner1
    },
    {
        id: 2,
        category: "Coorperate Partners",
        image: partner2
    },
    {
        id: 3,
        category: "Category 3",
        image: partner3
    },
    {
        id: 4,
        category: "University Partners",
        image: partner1
    },
    {
        id: 5,
        category: "Coorperate Partners",
        image: partner2
    },
    {
        id: 6,
        category: "University Partners",
        image: partner3
    },
    {
        id: 7,
        category: "University Partners",
        image: partner1
    },
    {
        id: 8,
        category: "Coorperate Partners",
        image: partner2
    },
    {
        id: 9,
        category: "Category 3",
        image: partner2
    },
]

const Hero = () => {
  return (
    <>
        <section className='flex flex-col bg-primary/90 font-poppins px-[50px] md:px-[150px] items-center text-center text-white'>
            <h1 className='font-bold text-[36px] pt-[150px]'>Ready to Ace Your Next Interview?</h1>
            <p className='font-medium text-[16px] mt-[15px] max-w-[400px]'>Get personalized feedback from industry experts with live mock sessions</p>
            <Button text='Book a Mock interview Today!' to="/services/mock-interviews/choose-role" bgColor="bg-primary/0" className='border border-2 border-white mt-[30px] my-[50px] max-w-[350px]'/>
        </section>

        <section className='px-[50px] md:px-[150px] my-[50px]'>
            <h1 className='font-bold text-[24px]'>Top Companies Hiring on VBuzz</h1>
            <div className='flex overflow-x-auto hide-scrollbar mt-[30px]'>
            {
                partners.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt="partner"
                        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-cover"
                    />
                ))
            }
            </div>
        </section>
    </>
  )
}

export default Hero;
