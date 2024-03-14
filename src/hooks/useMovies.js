import withMovies from '../mocks/result-movies.json'
import withoutMovies from '../mocks/no-result-movies.json'
import { useState } from 'react'

export function useMovies() {
  const [movies, setMovies] = useState(withMovies.Search)

  const mappedMovies = movies.map(movie => ({
    title: movie.Title,
    year: movie.Year,
    id: movie.imdbID,
    poster: movie.Poster,
    type: movie.Type
  }))

  return { movies: mappedMovies }
}
