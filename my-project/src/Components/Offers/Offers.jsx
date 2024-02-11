import React from 'react'
import './Offers.css'
import F11 from '../img/F11.jpg'

import { FaSmileWink } from "react-icons/fa";

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        
        <button>Check Now  <FaSmileWink />
</button>

      </div>
      <div className="offers-right">
        <img src={F11} alt="" />
      </div>
    </div>
  )
}

export default Offers
