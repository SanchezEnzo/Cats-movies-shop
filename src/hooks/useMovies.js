import { useEffect, useRef, useState } from 'react'
import { fetchingMovies } from '../service/movies'

export function useMovies({ search }) {
  const [movies, setMovies] = useState('')
  const [loader, setLoader] = useState(false)

  const isSearchChange = useRef(search)

  async function getMovies() {
    if (isSearchChange.current == search) return
    if (search) {
      try {
        setLoader(true)
        const newMovies = await fetchingMovies(search)
        setMovies(newMovies)
        isSearchChange.current = search
      } catch {
        new Error('No se pudo realizar la búsqueda')
      } finally {
        setLoader(false)
      }
    }
  }

  return { movies, getMovies, loader }
}
