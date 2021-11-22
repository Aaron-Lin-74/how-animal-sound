import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'
import logo from '../logo.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h3 className='footer-subscription-heading'>
          Join the How Animals Sounds newsletter to receive our latest updates
        </h3>
        <p className='footer-subscription-text'>
          You can unsubscript at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              className='footer-input'
              placeholder='Your Email'
              required
            />
            <button className='btn'>Subscribe</button>
          </form>
        </div>
      </section>
      <section className='footer-links'>
        <div className='footer-nav-items'>
          <Link to='/'>Contact</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/'>FAQ</Link>
          <Link to='/'>Terms of Use</Link>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrapper'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} alt='logo' className='logo' />
            </Link>
          </div>
          <small className='website-rights'>© 2021 How Animal Sounds</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <i>
                <FiFacebook />
              </i>
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <i>
                <FiInstagram />
              </i>
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <i>
                <FiTwitter />
              </i>
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Youtube'
            >
              <i>
                <FiYoutube />
              </i>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
