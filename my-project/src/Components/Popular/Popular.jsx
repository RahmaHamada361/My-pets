import React from 'react'
import './Popular.css'
import data_product from '../assets/data'
import Item from '../Item/Item'
import { PiDogDuotone } from "react-icons/pi";
import { FaCat } from "react-icons/fa6";

const Popular = () => {
  return (
    <div className='popular'>
      <h1><FaCat /> Product <PiDogDuotone /></h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
