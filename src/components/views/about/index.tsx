import React from 'react'
import HeroBanner from './HeroBanner'
import AgricultureMarket from './AgricultureMarket'
import VideoSection from './VideoSection'
import StatsCounter from './StatsCounter'
import Testimonials from './Testimonials'
import FarmersShowcase from './FarmersShowcase'

export default function AboutView() {
  return (
    <div>
       <HeroBanner
        title="About" 
        backgroundImage="/images/wheat-field-banner.jpg" 
        breadcrumbs={[
          { label: "HOME", url: "/" },
          { label: "ABOUT", url: "/about" }
        ]}
      />
      
      <AgricultureMarket />
      <VideoSection /> 
      <StatsCounter />
      <Testimonials />
      <FarmersShowcase /> 
    </div>
  )
}
