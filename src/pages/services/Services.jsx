import React from 'react'

import NavBar from '../../components/NavBar'
import Hero from '../../components/services/Hero'
import Service from '../../components/services/Service'
import FAQs from '../../components/services/FAQ\'s'

const Services = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <div className="h-[1450px] sm:h-[1050px] md:h-[1250px] lg:h-[1100px] xl:h-[950px]"></div>
        <Service />
        <FAQs />
    </>
  )
}

export default Services