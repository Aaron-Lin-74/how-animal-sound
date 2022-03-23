import React, { useRef, useEffect } from 'react'
import { setSearchTerm, useGlobalContext } from '../../contexts/AppContext'

const SearchForm = () => {
  const { state, dispatch } = useGlobalContext()
  const searchValue = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [])
  return (
    <section className='search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <label htmlFor='name'>Search your favourate animal</label>
        <input
          id='name'
          type='text'
          ref={searchValue}
          value={state.searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </form>
    </section>
  )
}

export default SearchForm
