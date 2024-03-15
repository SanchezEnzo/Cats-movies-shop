const API_KEY = 'a2993ab'

export async function searchMovies(search) {
  if (search == '') return
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const data = await res.json()
    const { Search: movies } = data
    return movies?.map(movie => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      poster: movie.Poster,
      type: movie.Type
    }))
  } catch {
    throw new Error('Error searching movies')
  }
}
