import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../Imagenes/Vanguardia.png'

const Header = () => {
  return (
    <>
    <Link to='/'>
      <img src={logo} alt="Vanguardia Logo"  className='header-logo'/>
    </Link>
    </>
  )
}

export default Header