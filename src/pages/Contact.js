import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
    <Container>
      <TextWrapper>
        <h1>Contact Us</h1>
        <h2>We&apos;d love to hear from you!</h2>
      </TextWrapper>
      <FormWrapper>
        <Form
          action={`https://formsubmit.co/${process.env.REACT_APP_FORM_SUBMIT_CODE}`}
          method='POST'
        >
          <input
            type='text'
            name='name'
            placeholder='NAME'
            aria-label='name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='EMAIL'
            aria-label='email'
            required
          />
          <textarea name='message' aria-label='message' placeholder='MESSAGE' />
          <input
            type='hidden'
            name='_next'
            value={`${window.location.origin}/thankyou`}
          />
          <input type='hidden' name='_captcha' value='false' />
          <button type='submit'>Send</button>
        </Form>
      </FormWrapper>
    </Container>
  )
}

export default Contact
const Container = styled.main`
  min-height: calc(85vh - var(--navbarHeight));
  padding: 0 calc(3.5vw + 5px);
  overflow: hidden;
  background: url('/images/home-background.png') cover no-repeat fixed center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 auto;

  h1 {
    text-align: center;
    margin: 0 auto;
    padding: 40px 0;
    font: 300 60px 'Oswald', sans-serif;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 6px;
  }

  h2 {
    text-align: center;
    text-transform: capitalize;
    color: #fff;
  }
`
const FormWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
  flex: 1 auto;
`
const Form = styled.form`
  max-width: 400px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;

  input,
  textarea {
    width: 100%;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 12px;
    font-size: clamp(15px, 1.5vw, 18px);

    &:focus {
      border: 1px solid #fd917e;
    }
  }
  label {
    text-align: center;
  }

  textarea {
    height: 200px;
  }

  button {
    background-color: #fd917e;
    filter: drop-shadow(2px 2px 3px #0003);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(16px, 1.6vw, 18px);
    display: block;
    padding: 12px 20px;
    margin: 2px auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      filter: sepia(0.5);
    }
  }
`
