import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { addDoc, subscriptionRef } from '../firebase'

function Subscription() {
  const [email, setEmail] = useState()
  const history = useHistory()
  const subscribe = async (e) => {
    e.preventDefault()
    try {
      await addDoc(subscriptionRef, { email: email })
    } catch (error) {
      console.error('Something goes wrong', error)
    }
    setEmail('')
    history.push('/thankyou')
  }
  return (
    <Container>
      <Content>
        <h3 className='footer-subscription-heading'>
          Join the How Animals Sounds newsletter to receive our latest updates
        </h3>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <InputForm>
          <form onSubmit={subscribe}>
            <input
              type='email'
              name='email'
              className='footer-input'
              placeholder='Your Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit' className='btn'>
              Subscribe
            </button>
          </form>
        </InputForm>
      </Content>
    </Container>
  )
}

export default Subscription

const Container = styled.div`
  min-height: 500px;
  margin-top: 30px;
  background-image: linear-gradient(rgba(92, 93, 96, 24%), rgba(0, 0, 0, 100%)),
    url('/images/footer_background_large.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    padding-top: 2rem;
  }
`
const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin-bottom: 1.5rem;
  padding: 1.5rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`

const InputForm = styled.div`
  input {
    padding: 0.5rem 1.25rem;
    border-radius: 2px;
    margin-right: 1rem;
    margin-bottom: 1rem;
    outline: none;
    border: none;
    font-size: 1rem;
  }
  button {
    padding: 0.5rem 1.25rem;
    border-radius: 50px;
    outline: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      color: white;
      background: rgba(9, 9, 9, 0.6);
    }

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }
`
