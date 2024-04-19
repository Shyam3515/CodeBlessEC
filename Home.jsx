import React from 'react'
import HeroSection from './HeroSection'

import iphone14 from '../../assets/iphone-14-pro.webp';
import mac from '../../assets/mac-system-cut.jfif';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
  return (
    <div>
      <HeroSection title="Buy iphone 14 Pro" subtitle="Experience the power of the latest iphone 14 pro with our most pro camera ever." link="/" image={iphone14}/>

      <FeaturedProducts />

      <HeroSection title="Build the ultimate setup" subtitle="You can add studio display and colour-matched Magic accessories to your bag after configure your Mac mini." link="/" image={mac}/>
      {/* Hero */}
    </div>
  )
}

export default Home
