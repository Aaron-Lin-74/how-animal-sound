import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import load from '../resources/gifs/loading2.gif'
import AnimalCard from './AnimalCard'
import PlayCard from './PlayCard'
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
  FcProcess,
  FcGrid,
} from 'react-icons/fc'

const Gallery = ({ mode }) => {
  const { animals, sortAnimals, sortAnimalsDesc, shuffleAnimals, loading } =
    useGlobalContext()

  // Local state for gallery animal card mini mode
  const [showMini, setShowMini] = useState(false)

  // Toggle the gallery animal card mode
  const toggleMini = () => {
    setShowMini(!showMini)
  }

  return (
    <GalleryContainer>
      <BtnsContainer>
        <button onClick={sortAnimals}>
          <FcAlphabeticalSortingAz />
          <span>Sort A-Z</span>
        </button>
        <button onClick={sortAnimalsDesc}>
          <FcAlphabeticalSortingZa />
          <span>Sort Z-A</span>
        </button>
        <button onClick={shuffleAnimals}>
          <FcProcess />
          <span>Shuffle</span>
        </button>
        <button onClick={toggleMini}>
          <FcGrid />
          <span>{showMini ? 'Normal' : 'Mini'}</span>
        </button>
      </BtnsContainer>
      <div className={`${showMini ? 'card-grid-mini' : 'card-grid'}`}>
        {loading ? (
          <LoadingContainer>
            <ImgContainer>
              <img src={load} alt='loading...' />
            </ImgContainer>
          </LoadingContainer>
        ) : mode === 'play' ? (
          animals.map((animal) => {
            return (
              <PlayCard
                key={animal.name}
                name={animal.name}
                imageURL={animal.imageURL}
                showMini={showMini}
              />
            )
          })
        ) : (
          animals.map((animal) => {
            return (
              <AnimalCard
                key={Math.random()}
                name={animal.name}
                imageURL={animal.imageURL}
                audioURL={animal.audioURL}
                link={animal.link}
                showMini={showMini}
              />
            )
          })
        )}
      </div>
    </GalleryContainer>
  )
}

export default Gallery

const GalleryContainer = styled.div`
  position: relative;
  margin-top: 100px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: 0 2rem 1rem;
  min-height: 100vh;
  min-width: 320px;
  background: var(--backgroundColor);

  @media (max-width: 760px) {
    padding: 0;
    margin-top: 20px;
  }
`
const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--backgroundColor);

  button {
    padding: 12px;
    font-size: 1.5rem;
    background: var(--backgroundColor);
    color: #fff;
    width: 150px;
    height: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;

    &:hover {
      background: rgb(19, 19, 19);
    }

    @media (max-width: 760px) {
      span {
        font-size: 0.8rem;
      }
      height: 50px;
    }
  }
`
const LoadingContainer = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  object-fit: cover;
  object-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(195, 195, 197, 0.6);
`
const ImgContainer = styled.div`
  width: 40vw;
  max-width: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
