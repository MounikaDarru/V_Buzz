import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/home/Hero'
import Events from '../components/home/Events'
import Services from '../components/home/Services'
import OurMission from '../components/home/OurMission'
import OurApproach from '../components/home/OurApproach'
import OurPartners from '../components/home/Our Partners'
import Testimonial from '../components/home/Testimonial'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Events />
      <Services />
      <OurMission />
      <OurApproach />
      <OurPartners />
      <Testimonial />
    </>
  )
}

export default Home