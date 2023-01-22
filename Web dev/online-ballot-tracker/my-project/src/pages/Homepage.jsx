import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Instructions from '../components/Instructions'



function Homepage() {

  return (
    <>
      <div>
        <Header />
        <Hero />
      </div>
      <Instructions />
      <Footer />
    </>
  )
}





export default Homepage;
