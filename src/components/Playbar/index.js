import React, { useRef, useContext } from 'react'
import styled from 'styled-components'
import { PlayContext } from '../../pages/Play'
import { ACTIONS, useGlobalContext } from '../../contexts/AppContext'
import { FcSearch } from 'react-icons/fc'

const Playbar = () => {
  const playButtonRef = useRef(null)
  const { playRandomSound, playing } = useContext(PlayContext)
  const { state, dispatch } = useGlobalContext()
  return (
    <Container>
      <h2>Which animal did you hear?</h2>
      <button ref={playButtonRef} onClick={playRandomSound} disabled={playing}>
        Play
      </button>
      <SearchContainer>
        <FcSearch />
        <input
          id='name'
          type='text'
          value={state.searchTerm}
          placeholder='Search...'
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_SEARCHTERM,
              payload: { searchTerm: e.target.value },
            })
          }
        />
      </SearchContainer>
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
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;
  background: #fff;
  width: 40%;

  input {
    width: 70%;
    border: none;
    border-color: transparent;
    padding: 0.5rem;
    font-size: 1.2rem;
    outline: none;
  }
`
