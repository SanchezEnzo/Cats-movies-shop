import { Neflix, ReturnIcon } from '../components/Icons'
import { Link } from 'react-router-dom'
import { Movies } from '../components/Movies'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'

export default function SearchMovies() {
  const { error, setSearch, search, setError } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, setError })

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
    getMovies()
  }

  function handleChange(event) {
    const query = event.target.value
    if (query.startsWith(' ')) {
      setError('El buscador no puede empezar con un espacio')
      return
    }
    setSearch(query)
  }

  return (
    <div className='h-screen w-full bg-slate-900'>
      <section className='h-[25vh] mb-5 flex flex-col  items-center'>
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
        {!error && loading && (
          <p className='text-white font-bold mt-2'>Loading...</p>
        )}
      </section>
      <section className='flex justify-center items-center bg-slate-900'>
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
