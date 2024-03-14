export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies && (
      <ul className='text-white font-bold grid w-[70%] gap-5 movies'>
        {movies.map(movie => (
          <li
            key={movie.id}
            className='flex flex-col items-center w-[250px] aspect-auto mb-5'
          >
            <span className='mb-2 text-center'>
              {movie.title} - {movie.year}
            </span>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
    )
  )
}
