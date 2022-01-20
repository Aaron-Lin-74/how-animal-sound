import React from 'react'
import Bounce from 'react-reveal/Bounce'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'

const Error = () => {
  return (
    <Container>
      <Bounce left>
        <h1>Error 404</h1>
      </Bounce>
      <Zoom>
        <h2>
          Click <Link to='/'>here</Link> to go back to the home page.
        </h2>
      </Zoom>
    </Container>
  )
}

export default Error
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('/images/error-background.gif');
  background-repeat: no-repeat;
  background-position: right;
  background-color: #040204;
  background-position-x: center;
  padding: 10px 30px;
  color: #fff;

  h1 {
    font-size: 6rem;
  }
  h2,
  a {
    font-size: 2rem;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    background-size: contain;
    h1 {
      font-size: 2rem;
    }
    h2,
    a {
      font-size: 1rem;
    }
  }
`
