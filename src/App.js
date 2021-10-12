import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'
function App() {
  return (
    <>
      <Navbar />
      <SearchForm />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
