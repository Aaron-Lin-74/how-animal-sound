import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom'
import LightSpeed from 'react-reveal/LightSpeed'

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <Zoom>
          <div>
            <h1>About Us</h1>
          </div>
        </Zoom>
      </AboutContainer>
      <TextContainer>
        <LightSpeed left>
          <Text>
            This website application is developed by Aaron Lin for his beloved
            children and is a good place for kids to learn what different
            animals sound like.
          </Text>
          <br />
          <Text>
            Please feel free to explore the sounds of animals and play the
            little game to guess the animal based on the sound.
          </Text>
          <br />
          <Text>
            Let us know if you would like to hear the sound of specific animal.
            We will add the new sounds to the database regularly as time goes
            on.
          </Text>
        </LightSpeed>
      </TextContainer>
    </Container>
  )
}

export default About

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('/images/background-1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 3rem;
  color: #fff;

  div {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 30px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    min-width: 320px;
  }
`
const TextContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 80px;

  @media (max-width: 480px) {
    padding: 10px 30px;
  }
`

const Text = styled.p`
  font-size: 2rem;
  font-weight: 44;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`
