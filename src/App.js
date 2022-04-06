import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Play from './pages/Play'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Upload from './components/Upload'
import Search from './pages/Search'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Terms from './pages/Terms'
import useAuth from './hooks/useAuth'

function App() {
  const currentUser = useAuth()
  const loginAsAdmin = React.useCallback(
    () =>
      currentUser && currentUser.email === process.env.REACT_APP_ADMIN_EMAIL,
    [currentUser]
  )

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  const PrivateRoute = React.useCallback(
    ({ children, ...rest }) => (
      <Route
        {...rest}
        render={({ location }) => {
          return currentUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }}
      />
    ),
    [currentUser]
  )

  // A wrapper for <Route> that redirects to the login
  // screen if you're not an admin.
  const AdminRoute = React.useCallback(
    ({ children, ...rest }) => (
      <Route
        {...rest}
        render={({ location }) => {
          return loginAsAdmin() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }}
      />
    ),
    [loginAsAdmin]
  )

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <PrivateRoute path='/play'>
          <Play />
        </PrivateRoute>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/thankyou'>
          <ThankYou />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/terms'>
          <Terms />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <AdminRoute path='/upload'>
          <Upload currentUser={currentUser} />
        </AdminRoute>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
