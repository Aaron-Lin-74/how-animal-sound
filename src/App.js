import React from 'react'
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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/play'>
            <Play />
          </Route>
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
          <Route path='/upload'>
            <Upload />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
