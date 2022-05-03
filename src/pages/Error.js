import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

function Error({ header }) {
  return (
    <Container>
      <Fade left>
        <h1>Error {header}</h1>
      </Fade>
      <Fade>
        <h2>
          Click
          <Link to='/'>here</Link>
          to go back to the home page.
        </h2>
      </Fade>
    </Container>
  )
}

export default Error
const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - var(--navbarHeight));
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
