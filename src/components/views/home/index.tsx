import React from 'react'
import HeroSection from './hero-section'
import PostHeroSection from './post-hero'
import HotDealsSection from './hot-deals-section'

export default function HomeView() {
  return (
    <div>
        <HeroSection/>
        <PostHeroSection/>
        <HotDealsSection/>
    </div>
  )
}
