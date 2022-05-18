import React, { useRef, useEffect } from 'react'
import { setSearchTerm, useGlobalContext } from '../../contexts/AppContext'

function SearchForm() {
  const { dispatch } = useGlobalContext()
  const searchValue = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const debounce = (delay = 300) => {
    let timeoutId
    return (event) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        dispatch(setSearchTerm(event.target.value))
      }, delay)
    }
  }

  return (
    <section className='search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <label htmlFor='name'>
          Search your favourate animal
          <input
            id='name'
            type='text'
            ref={searchValue}
            onChange={debounce(500)}
          />
        </label>
      </form>
    </section>
  )
}

export default SearchForm
