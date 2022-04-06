import React, { useRef, useEffect } from 'react'
import { setSearchTerm, useGlobalContext } from '../../contexts/AppContext'

function SearchForm() {
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
        <label htmlFor='name'>
          Search your favourate animal
          <input
            id='name'
            type='text'
            ref={searchValue}
            value={state.searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </label>
      </form>
    </section>
  )
}

export default SearchForm
