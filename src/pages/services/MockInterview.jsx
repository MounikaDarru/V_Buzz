import React from 'react'
import NavBar from '../../components/NavBar'
import Hero from '../../components/services/mock-interview/Hero'
import GetStarted from '../../components/services/mock-interview/GetStarted'
import Expert from '../../components/services/mock-interview/Expert'

const MockInterview = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <GetStarted />
      <Expert />
    </>
  )
}

export default MockInterview
