import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../service/movies'

export function useMovies({ search, setError, sort }) {
  const [movies, setMovies] = useState('')
  const [loading, setLoading] = useState(false)

  const isSearchChange = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (isSearchChange.current == search) return
    if (search) {
      try {
        setLoading(true)
        const newMovies = await searchMovies(search)
        setMovies(newMovies)
        isSearchChange.current = search
      } catch {
        setError('No se puedo realizar la búsqueda')
      } finally {
        setLoading(false)
      }
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
