import React from 'react'
import Gallery from '../components/Gallery'
import Viewers from '../components/Viewers'
import styled from 'styled-components'
import Subscription from '../components/Subscription'

const Home = () => {
  return (
    <Container>
      <Viewers />
      <Gallery />
      <Subscription />
    </Container>
  )
}

export default Home

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/home-background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachement: fixed;
    z-index: -1;
  }
`
