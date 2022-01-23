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
import { IoMdCloudUpload } from 'react-icons/io'
import { RiSearchFill } from 'react-icons/ri'
import { signOutUser } from '../firebase'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const toggleMenu = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const currentUser = useAuth()
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
              className='logo'
              onClick={closeMobileMenu}
            />
          </Link>
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
          {currentUser && (
            <li className='nav-links' onClick={closeMobileMenu}>
              <Link to='/play'>
                <AiFillPlaySquare />
                Play
              </Link>
            </li>
          )}
          {currentUser &&
            currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
              <li className='nav-links' onClick={closeMobileMenu}>
                <Link to='/upload'>
                  <IoMdCloudUpload />
                  Upload
                </Link>
              </li>
            )}
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/about'>
              <AiFillInfoCircle />
              About
            </Link>
          </li>
          <li className='nav-links' onClick={closeMobileMenu}>
            <Link to='/contact'>
              <AiFillContacts />
              Contact
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
              <Link to='/'>
                <div className='wrap'>
                  <img
                    className='profile'
                    src={currentUser.photoURL}
                    alt='user-profile'
                  />
                </div>
                {currentUser.displayName}
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
