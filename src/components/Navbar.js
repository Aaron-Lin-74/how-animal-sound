import React, { useState } from 'react'
import './Navbar.css'
import logo from '../logo.svg'
import { FcMenu, FcPrevious } from 'react-icons/fc'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [click, setClick] = useState(false)
  const toggleMenu = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src={logo}
            alt='logo'
            className='logo'
            onClick={closeMobileMenu}
          />
          <button className={'nav-toggle'} onClick={toggleMenu}>
            {click ? <FcPrevious /> : <FcMenu />}
          </button>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/play'>Play</Link>
          </li>
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/contactus'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
