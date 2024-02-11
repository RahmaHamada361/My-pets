import React from 'react'
import './Breadcrum.css'
import { FaArrowCircleRight } from "react-icons/fa";

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
     SHOP <FaArrowCircleRight /> {product.category} <FaArrowCircleRight />{product.name}
    </div>
  )
}

export default Breadcrum