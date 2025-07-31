import React from 'react'
import './Header.css'
import logo from '../../Imagenes/Vanguardia.jpg'

const Header = () => {
  return (
    <>
      <img src={logo} alt="Vanguardia Logo"  className='header-logo'/>
    </>
  )
}

export default Header