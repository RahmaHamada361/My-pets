import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
     
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Register Now</button>
      </div>
    </div>
  )
}

export default NewsLetter