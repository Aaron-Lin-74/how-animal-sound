import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='/images/mammal.png' alt='mammal' animal-type='mammal' />
      </Wrap>
      <Wrap>
        <img src='/images/bird.png' alt='bird' />
      </Wrap>
      <Wrap>
        <img src='/images/amphibian.png' alt='amphibian' />
      </Wrap>
      <Wrap>
        <img src='/images/reptile.png' alt='reptile' />
      </Wrap>
      <Wrap>
        <img src='/images/insect.png' alt='insect' />
      </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-top: 35px;
  padding: 30px 0 25px;
`

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  transition: all 250ms ease-in;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    object-fit: cover;
    transform: scale(0.8);
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`
