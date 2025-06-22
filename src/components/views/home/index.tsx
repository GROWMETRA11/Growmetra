import React from 'react'
import Hero from './hero-section'
import About from './About'
import Works from './Works'
import Benefits from './Benefits'
import Success from './Success'
import Advert from './Advert'
import ContactUs from './ContactUs'


export default function HomeView() {
  return (
    <div>
        <Hero/>
        <About/>
        <Works/>
        <Benefits/>
        <Success/>
        <Advert/>
        <ContactUs/>
    </div>
  )
}
