import React from 'react'
import styled from 'styled-components'
import { signInWithGoogle } from '../../firebase'
import { Redirect } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function Login() {
  // Once login, redirect to home page
  const currentUser = useAuth()
  if (currentUser) {
    return <Redirect to='/' />
  }
  return (
    <Container>
      <Content>
        <h2>SIGN IN WITH YOUR GOOGLE ACCOUNT </h2>
        <LoginBtn onClick={signInWithGoogle}>GET ALL THERE</LoginBtn>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
  min-height: calc(85vh - var(--navbarHeight));
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.6;
    z-index: -1;
    background-image: url('/images/login-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }
`
const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`

const LoginBtn = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 17px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  transition: all 250ms ease-in;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`
