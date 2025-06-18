import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/home/Hero'
import HeroAd from '../components/home/Ad1'
import Events from '../components/home/Events'
import Services from '../components/home/Services'
import OurMission from '../components/home/OurMission'
import OurApproach from '../components/home/OurApproach'
import OurPartners from '../components/home/Our Partners'
import Testimonial from '../components/home/Testimonial'
import HeroCarousel from '../components/HeroCarousel'

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroCarousel />
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