import { useEffect, useState } from 'react'

export function useMovies({ search }) {
  const [movies, setMovies] = useState('')

  console.log(search)

  useEffect(() => {
    if (search) {
      fetch(`https://www.omdbapi.com/?apikey=a2993ab&s=${search}`)
        .then(res => res.json())
        .then(data => {
          if (data.Search) {
            const { Search: movies } = data
            const mappedMovies = movies.map(movie => ({
              title: movie.Title,
              year: movie.Year,
              id: movie.imdbID,
              poster: movie.Poster,
              type: movie.Type
            }))
            setMovies(mappedMovies)
          }
        })
    }
  }, [search])

  return { movies }
}
