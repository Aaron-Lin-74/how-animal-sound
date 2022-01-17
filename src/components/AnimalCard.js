import React from 'react'
import { FcSpeaker } from 'react-icons/fc'
import useAudio from '../hooks/useAudio'
import styled from 'styled-components'

function AnimalCard({ name, imageURL, audioURL, link, showMini }) {
  const { playing, toggle, stopPlaying } = useAudio(audioURL)

  return (
    <Container>
      <img
        className={`${showMini ? 'animal-img-mini' : 'animal-img'}`}
        src={imageURL}
        alt={`${name} is making sound`}
        onClick={toggle}
        onMouseLeave={stopPlaying}
      />
      {!showMini && (
        <FooterContainer>
          <p>
            <a
              className='animal-link'
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              Learn {name}
            </a>
            {playing && <FcSpeaker />}
          </p>
        </FooterContainer>
      )}
    </Container>
  )
}

export default AnimalCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: var(--backgroundColor);
  font-size: 1rem;
  color: #fff;
  box-shadow: var(--lightShadow);
  height: 100%;
  width: 100%;
  border-radius: var(--mainBorderRadius);
  transition: all 500ms;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  animation: cardEntrance 1s ease-in;
  animation-fill-mode: backwards;

  @keyframes cardEntrance {
    from {
      opacity: 0;
      transform: scale(0.2);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:hover {
    box-shadow: 0 0.35em 1.75em rgba(2, 8, 20, 0.1),
      0 0.175em 0.5em rgba(2, 8, 20, 0.08);
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    text-transform: capitalize;
  }
`
