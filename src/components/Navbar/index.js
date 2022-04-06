import React, { useState } from 'react'
import './Navbar.css'
import { FcMenu, FcPrevious } from 'react-icons/fc'
import {
  AiFillHome,
  AiFillPlaySquare,
  AiFillInfoCircle,
  AiFillContacts,
} from 'react-icons/ai'
import { IoMdCloudUpload } from 'react-icons/io'
import { RiSearchFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../firebase'
import logo from '../../logo.svg'
import useAuth from '../../hooks/useAuth'

function Navbar() {
  const [click, setClick] = useState(false)
  const toggleMenu = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const currentUser = useAuth()
  const loginAsAdmin = () =>
    currentUser && currentUser.email === process.env.REACT_APP_ADMIN_EMAIL

  return (
    <header className='header'>
      <nav className='navbar' aria-label='Main Navigation'>
        <div className='nav-header'>
          <Link to='/' onClick={closeMobileMenu}>
            <img src={logo} alt='logo' className='logo' />
          </Link>
          <button
            className='nav-toggle'
            onClick={toggleMenu}
            type='button'
            title={click ? 'close menu' : 'open menu'}
            aria-label={click ? 'close menu' : 'open menu'}
          >
            {click ? <FcPrevious /> : <FcMenu />}
          </button>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-links'>
            <Link to='/' onClick={closeMobileMenu}>
              <AiFillHome />
              Home
            </Link>
          </li>
          {currentUser && (
            <li className='nav-links'>
              <Link to='/play' onClick={closeMobileMenu}>
                <AiFillPlaySquare />
                Play
              </Link>
            </li>
          )}
          {loginAsAdmin() && (
            <li className='nav-links'>
              <Link to='/upload' onClick={closeMobileMenu}>
                <IoMdCloudUpload />
                Upload
              </Link>
            </li>
          )}
          <li className='nav-links'>
            <Link to='/about' onClick={closeMobileMenu}>
              <AiFillInfoCircle />
              About
            </Link>
          </li>
          <li className='nav-links'>
            <Link to='/contact' onClick={closeMobileMenu}>
              <AiFillContacts />
              Contact
            </Link>
          </li>

          <li className='nav-links'>
            <Link to='/search' onClick={closeMobileMenu}>
              <RiSearchFill />
              Search
            </Link>
          </li>

          <li className='nav-links'>
            {currentUser ? (
              <Link
                to='/login'
                onClick={(signOutUser, closeMobileMenu)}
                id='logout'
              >
                <div className='wrap'>
                  <img
                    className='profile'
                    src={currentUser.photoURL}
                    alt='user-profile'
                  />
                </div>
              </Link>
            ) : (
              <Link to='/login'>Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
