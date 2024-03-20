import { useEffect, useRef, useState } from 'react'
import { ReturnIcon } from '../components/Icons'
import { Link } from 'react-router-dom'
import { useSearchShopping } from '../hooks/useSearchShopping'
import { useProducts } from '../hooks/useProducts'
import { Products } from '../components/Products'

export default function ShoppingCart() {
  const [filters, setFilters] = useState({ price: 0, category: 'all' })
  const [error, setError] = useState('')
  const priceRef = useRef()
  const categoryRef = useRef()
  const { search, setSearch } = useSearchShopping({ setError })
  const { products, getProducts } = useProducts({ search, filters })

  const handleSubmit = event => {
    event.preventDefault()

    if (search === '') {
      setError('El buscador no puede estar vacío')
      return
    }
    if (search.length < 3) {
      setError('El buscador necesita mínimo 3 caracteres')
      return
    }
    getProducts()
  }

  const handleChangeSearch = event => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) {
      setError('El búscador no puede empezar con espacio')
      return
    }
    if (newQuery.match(/^\d+$/)) {
      setError('El búscador no puede empezar con un número')
      return
    }
    setError('')
    setSearch(newQuery)
  }

  const handleChangePrice = event => {
    const newPrice = event.target.value
    setFilters({ ...filters, price: newPrice })
  }

  return (
    <div className='w-full h-screen bg-slate-400'>
      <section className='w-[100%] h-[150px] flex items-center justify-center'>
        <form className='flex items-center' onSubmit={handleSubmit}>
          <div className='w-[400px]'>
            <label>
              <input
                type='text'
                name='query'
                placeholder='Smartphone, cámara, portátil'
                className='pl-1 mr-2'
                onChange={handleChangeSearch}
              />
            </label>
            <button>Search</button>
            {error && (
              <small>
                <p className='text-red-600 font-bold absolute mt-1'>{error}</p>
              </small>
            )}
          </div>
          <div className='ml-10 flex flex-col items-center'>
            <div className='flex items-center'>
              <label htmlFor={priceRef} className='mr-1'>
                Precio
              </label>
              <input
                type='range'
                name='price'
                min={0}
                max={2000}
                id={priceRef}
                onChange={handleChangePrice}
                className='mr-2'
              ></input>
              <span className='w-[10px]'>${filters.price}</span>
            </div>
            <div>
              <label htmlFor={categoryRef} className=' mr-1'>
                Categoria
              </label>
              <select name='category' id={categoryRef}>
                <option value='all'>All</option>
                <option value='electrónica'>Electrónica</option>
                <option value='hogar'>Hogar</option>
                <option value='salud y belleza'>Salud y Belleza</option>
              </select>
            </div>
          </div>
        </form>
      </section>
      <section className=' bg-slate-400 flex items-center justify-center'>
        <Products products={{ products }} />
      </section>

      <Link to='/' className='absolute top-4 left-4 flex flex-col items-center'>
        <ReturnIcon />
        <span className='text-white'>Go back</span>
      </Link>
      <div className='fixed bottom-4 left-4 flex flex-col text-white font-bold'>
        <span>Price: ${filters.price}</span>
        <span>Category: {filters.category}</span>
        <span>Search: {search}</span>
      </div>
    </div>
  )
}
