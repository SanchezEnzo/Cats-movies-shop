import { useEffect, useRef, useState } from 'react'
import { searchMovies } from '../service/movies'

export function useMovies({ search, setError }) {
  const [movies, setMovies] = useState('')
  const [loading, setLoading] = useState(false)

  const isSearchChange = useRef(search)

  async function getMovies() {
    if (isSearchChange.current == search) return
    if (search) {
      try {
        setLoading(true)
        const newMovies = await searchMovies(search)
        const orderedMovies = newMovies.sort()
        setMovies(newMovies)
        isSearchChange.current = search
      } catch {
        setError('No se puedo realizar la búsqueda')
      } finally {
        setLoading(false)
      }
    }
  }

  return { movies, getMovies, loading }
}
