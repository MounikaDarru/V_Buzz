import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/home/Hero'
import Events from '../components/home/Events'
import Services from '../components/home/Services'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Events />
      <Services />
    </>
  )
}

export default Home