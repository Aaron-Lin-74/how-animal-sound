import React from 'react'
import styled from 'styled-components'

const ThankYou = () => {
  return (
    <Container>
      <h1>Thank You!</h1>
    </Container>
  )
}

export default ThankYou
const Container = styled.div`
  min-height: calc(85vh - var(--navbarHeight));
  padding: 30px calc(3.5vw + 5px);
  overflow: hidden;
  background: url('/images/thankyou-background.jpg') left no-repeat fixed;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 50px;
  }
`
