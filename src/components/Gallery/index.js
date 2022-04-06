import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
  FcProcess,
  FcGrid,
} from 'react-icons/fc'
import { useGlobalContext, setSearchTerm } from '../../contexts/AppContext'
import AnimalCard from '../AnimalCard'
import PlayCard from '../PlayCard'

function Gallery({ mode }) {
  const { state, dispatch } = useGlobalContext()
  const { animals, loading, searchTerm } = state

  // Local copy of the fetched animals, so that we can sort and filter on it
  const [localAnimals, setLocalAnimals] = useState([])
  useEffect(() => {
    dispatch(setSearchTerm(''))
    setLocalAnimals(animals)
  }, [animals, dispatch])

  //  Use the filter to implement the search function
  useEffect(() => {
    if (searchTerm.length !== 0) {
      setLocalAnimals([
        ...animals.filter((animal) =>
          animal.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      ])
    } else {
      // Load all animals when searchTerm is empty
      setLocalAnimals(animals)
    }
  }, [searchTerm, animals])

  // Local state for gallery animal card mini mode
  const [showMini, setShowMini] = useState(false)

  // Toggle the gallery animal card mode
  const toggleMini = () => {
    setShowMini(!showMini)
  }

  // Sort the animals by name A-Z
  const sortAnimals = () => {
    setLocalAnimals(() => [
      ...localAnimals.sort((animal1, animal2) => {
        if (animal1.name < animal2.name) {
          return -1
        }
        if (animal1.name > animal2.name) {
          return 1
        }
        return 0
      }),
    ])
  }

  // Sort the animals by name in descent order Z-A
  const sortAnimalsDesc = () => {
    setLocalAnimals(() => [
      ...localAnimals.sort((animal1, animal2) => {
        if (animal1.name < animal2.name) {
          return 1
        }
        if (animal1.name > animal2.name) {
          return -1
        }
        return 0
      }),
    ])
  }

  // Randomly order the animals
  const shuffleAnimals = () => {
    setLocalAnimals(() => [...localAnimals.sort(() => 0.5 - Math.random())])
  }

  return (
    <GalleryContainer>
      <BtnsContainer>
        <button type='button' onClick={sortAnimals}>
          <FcAlphabeticalSortingAz />
          <span>Sort A-Z</span>
        </button>
        <button type='button' onClick={sortAnimalsDesc}>
          <FcAlphabeticalSortingZa />
          <span>Sort Z-A</span>
        </button>
        <button type='button' onClick={shuffleAnimals}>
          <FcProcess />
          <span>Shuffle</span>
        </button>
        <button type='button' onClick={toggleMini}>
          <FcGrid />
          <span>{showMini ? 'Normal' : 'Mini'}</span>
        </button>
      </BtnsContainer>
      <CardContainer className={`${showMini ? 'card-grid-mini' : 'card-grid'}`}>
        {loading && (
          <LoadingContainer>
            <ImgContainer>
              <img src='/images/loading.gif' alt='loading...' />
            </ImgContainer>
          </LoadingContainer>
        )}
        {!loading &&
          (mode === 'play'
            ? localAnimals.map((animal) => (
                <PlayCard
                  key={animal.name}
                  name={animal.name}
                  imageURL={animal.imageURL}
                  showMini={showMini}
                />
              ))
            : localAnimals.map((animal) => (
                <AnimalCard
                  key={animal.name}
                  name={animal.name}
                  imageURL={animal.imageURL}
                  audioURL={animal.audioURL}
                  link={animal.link}
                  showMini={showMini}
                />
              )))}
      </CardContainer>
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
  // min-height: 100vh;
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

// Enable the dynamic className
const CardContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.card-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: 280px;
    background: rgb(19, 19, 19);
    color: #fff;
    padding: 2rem;
  }
  &.card-grid-mini {
    display: grid;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-auto-rows: 150px;
    background: rgb(19, 19, 19);
    justify-content: space-evenly;
  }
`

const LoadingContainer = styled.div`
  position: fixed;
  top: var(--navbarHeight);
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
