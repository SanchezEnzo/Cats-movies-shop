import { useState } from 'react'

export function useSearchShopping({ setError }) {
  const [search, setSearch] = useState('')

  const handleSearch = event => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) {
      setError('El buscador no puede empezar con espacio')
      return
    }
    if (newQuery.match(/^\d+$/)) {
      setError('El buscador no puede empezar con un número')
      return
    }
    setError('')
    setSearch(newQuery)
  }

  return { search, setSearch, handleSearch }
}
