import React from 'react'
import Nike from "../../Imagenes/Nike.jpg";
import {Link} from "react-router-dom"

export const Header = () => {
  return (
 <header>
    <Link to='/'>
        <div className='logo'>
        <img src={Nike} alt="logo" width= "150"></img>
        </div>
    </Link>
    <ul>
        <li>
        <Link to="/">INICIO</Link>
        </li>
        <li>
        <Link to="/Productos">PRODUCTOS</Link>
        </li>
    </ul>
    <div className='cart'>
        <box-icon name="cart"></box-icon>
        <span className='item__total'>0</span>
    </div>
 </header>
  )
}
