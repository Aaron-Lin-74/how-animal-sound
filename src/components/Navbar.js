import React, { useState } from 'react'
import './Navbar.css'
import logo from '../logo.svg'
import { FcMenu, FcPrevious } from 'react-icons/fc'
import {
  AiFillHome,
  AiFillPlaySquare,
  AiFillInfoCircle,
  AiFillContacts,
} from 'react-icons/ai'
import { RiSearchFill } from 'react-icons/ri'
import { useAuth, signOutUser } from '../firebase'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [click, setClick] = useState(false)
  const toggleMenu = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const currentUser = useAuth()
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
            <Link to='/'>
              <AiFillHome />
              Home
            </Link>
          </li>
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/play'>
              <AiFillPlaySquare />
              Play
            </Link>
          </li>
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/about'>
              <AiFillInfoCircle />
              About
            </Link>
          </li>
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/contactus'>
              <AiFillContacts />
              Contact Us
            </Link>
          </li>

          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/search'>
              <RiSearchFill />
              Search
            </Link>
          </li>

          {currentUser && (
            <li className='nav-links' onClick={closeMobileMenu}>
              <Link to='/dashboard'>
                <div className='wrap'>
                  <img
                    className='profile'
                    src={currentUser.photoURL}
                    alt='user-profile'
                  />
                </div>
              </Link>
            </li>
          )}
          <li className='nav-links' onClick={closeMobileMenu}>
            {currentUser ? (
              <Link to='/' onClick={signOutUser}>
                Logout
              </Link>
            ) : (
              <Link to='/login'>Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
