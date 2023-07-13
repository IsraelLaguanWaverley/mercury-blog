import React from 'react'
import Logo from '../../assets/images/logo.jpg'
import Menu from './Menu'
import Button from './Button'
import BaseButton from '../BaseButton'

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <Menu menus={['Home', 'About Us', 'Service', 'Contact Us', 'Blog']} />
      <BaseButton color={black} text="Book Appointment" to="/" />
    </nav>
  )
}

export default Navbar
