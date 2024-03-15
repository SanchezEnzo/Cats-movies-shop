export async function fetchingMovies(search) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=a2993ab&s=${search}`)
  const data = await res.json()
  if (data.Search) {
    const { Search: movies } = data

    const mappedMovies = movies.map(movie => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      poster: movie.Poster,
      type: movie.Type
    }))

    return mappedMovies
  }
}
