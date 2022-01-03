import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Play from './pages/Play'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Search from './pages/Search'
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
          <Route path='/search'>
            <Search />
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
