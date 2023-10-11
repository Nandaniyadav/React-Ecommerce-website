import React from 'react'
import HeroSection from '../component2/HeroSection'

const About = () => {
  const data = {
    name: "Nandani Ecommerce",
  };
  return (
    <div>
      <HeroSection myData={data}/>
    </div>
  )
}

export default About
