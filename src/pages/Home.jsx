import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/home/Hero'
import Events from '../components/home/Events'
import Services from '../components/home/Services'
import OurMission from '../components/home/OurMission'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Events />
      <Services />
      <OurMission />
    </>
  )
}

export default Home