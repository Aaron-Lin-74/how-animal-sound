import React, { useRef, useContext } from 'react'
import styled from 'styled-components'
import { PlayContext } from '../pages/Play'

const Playbar = () => {
  const playButtonRef = useRef(null)
  const { playRandomSound } = useContext(PlayContext)
  return (
    <Container>
      <h2>Which animal did you hear?</h2>
      <button ref={playButtonRef} onClick={playRandomSound}>
        Play
      </button>
    </Container>
  )
}

export default Playbar

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;
  width: 50%;
  margin: 4rem auto 0;
  background: var(--backgroundColor);
  color: #fff;
  box-shadow: var(--lightShadow);
  border-radius: var(--mainBorderRadius);

  button {
    padding: 10px;
    width: 100px;
    margin-top: 20px;
    font-size: 1rem;
    cursor: pointer;
  }

  @media (max-width: 760px) {
    width: 100%;
    padding: 1rem;
  }
`
