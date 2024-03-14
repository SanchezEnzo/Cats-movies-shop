import { useEffect, useRef, useState } from 'react'
import { Neflix, ReturnIcon } from '../components/Icons'
import { Link } from 'react-router-dom'
import { Movies } from '../components/Movies'
import { useMovies } from '../hooks/useMovies'

export default function SearchMovies() {
  const [search, setSearch] = useState('')
  const { movies } = useMovies()
  const [error, setError] = useState('')

  // useEffect(() => {
  //   fetch('https://www.omdbapi.com/?apikey=a2993ab&s=batman')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.Search) {
  //         const { Search: newMovies } = data
  //         console.log(newMovies)
  //         setMovies(newMovies)
  //       } else {
  //         console.log('No se encontraron películas.')
  //       }
  //     })
  //     .catch(error =>
  //       console.log('Hubo un error al momento de obtener datos:', error)
  //     )
  // }, [])

  function useSearch() {}

  function handleSubmit(e) {
    e.preventDefault()
    if (search == '') {
      setError('El buscador no puede estar vacío')
      return
    }
    if (search.length < 3) {
      setError('El buscador necesita como mínimo 3 caracteres')
      return
    }
  }

  function handleChange(event) {
    const query = event.target.value
    if (query.startsWith(' ')) {
      setError('El buscador no puede empezar con un espacio')
      return
    }
    setSearch(query)
  }

  useEffect(() => {
    if (search.match(/^\d+$/)) {
      setError('No se puede utilizar números al inicio')
      return
    }
    setError('')
  }, [search])

  return (
    <div className='h-full w-full bg-slate-900'>
      <section className='h-[25vh] mb-10 flex flex-col  items-center'>
        <form
          onSubmit={handleSubmit}
          className='flex justify-center items-center mt-10'
        >
          <label>
            <input
              type='text'
              placeholder='Batman, El padrino, Iron-Man...'
              className='rounded-md'
              name='query'
              onChange={handleChange}
            />
          </label>
          <button className='text-white ml-4 border px-2 rounded-md'>
            Search
          </button>
        </form>
        {error && <p className={`text-red-700 mt-1 }`}>{error}</p>}
      </section>
      <section className='flex justify-center items-center'>
        <Movies movies={movies} />
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
