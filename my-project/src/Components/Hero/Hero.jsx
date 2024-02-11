import React from 'react'
import './Hero.css'

import { FaArrowCircleRight } from "react-icons/fa";
import bbb1 from '/src/Components/Assets/bbb1.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        
        <div>
            <div className="hero-hand-icon">
            </div>
            <p>Welcom</p>
            <p>To The Site Animals</p>
        </div>
        <div className="hero-latest-btn">
            <div> Go To Product</div>
            <FaArrowCircleRight />
        </div>
      </div>
      <div className="hero-right">
      <img src={bbb1} />
      </div>
    </div>
  )
}

export default Hero
