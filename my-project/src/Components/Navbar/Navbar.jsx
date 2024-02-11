import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { FaOpencart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
      <FaShoppingBag />
        <p>My Pets</p>
      </Link>
   
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("cats")}}><Link to='/cats'>cats</Link>{menu==="cats"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("drayfoods")}}><Link to="drayfoods">drayfoods</Link>{menu==="drayfoods"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("dogs")}}><Link to='/dogs'>dogs</Link>{menu==="dogs"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><FaOpencart /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
