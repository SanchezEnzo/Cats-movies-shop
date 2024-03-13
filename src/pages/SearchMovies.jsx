import { useEffect, useState } from 'react'
import { Neflix, ReturnIcon } from '../components/Icons'
import { Link } from 'react-router-dom'

export default function SearchMovies() {
  const [movies, setMovies] = useState('')

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=a2993ab&s=batman')
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          const { Search: newMovies } = data
          console.log(newMovies)
          setMovies(newMovies)
        } else {
          console.log('No se encontraron películas.')
        }
      })
      .catch(error =>
        console.log('Hubo un error al momento de obtener datos:', error)
      )
  }, [])

  return (
    <div className='h-full w-full bg-slate-900'>
      <section className='h-[20vh] flex justify-center items-center mb-10'>
        <form>
          <input
            type='text'
            placeholder='Batman, El padrino, Iron-Man...'
            className='rounded-md'
          />
          <button className='text-white ml-4 border px-2 rounded-md'>
            Search
          </button>
        </form>
      </section>
      <section className='flex justify-center items-center'>
        <ul className='text-white font-bold grid w-[70%] gap-5 movies'>
          {movies &&
            movies.map(movie => (
              <li
                key={movie.imdbID}
                className='flex flex-col items-center w-[250px] aspect-auto mb-5'
              >
                <span
                  className='mb-2 text-center
                '
                >
                  {movie.Title} - {movie.Year}
                </span>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
        </ul>
      </section>
      <Link to='/' className='absolute top-4 left-4 flex flex-col items-center'>
        <ReturnIcon />
        <span className='text-white'>Go back</span>
      </Link>
      <div className='absolute top-5 right-10'>
        <Neflix />
      </div>
    </div>
  )
}
