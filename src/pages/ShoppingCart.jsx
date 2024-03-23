import { useRef, useState } from 'react'
import { ReturnIcon } from '../components/Icons'
import { Link } from 'react-router-dom'
import { useSearchShopping } from '../hooks/useSearchShopping'
import { useProducts } from '../hooks/useProducts'
import { Products } from '../components/Products'
import { useFilters } from '../hooks/useFilters'

export default function ShoppingCart() {
  const [error, setError] = useState('')
  const priceRef = useRef()
  const categoryRef = useRef()
  const { search, handleSearch } = useSearchShopping({ setError })
  const { filters, handlePrice, handleCategory } = useFilters()
  const { products, getProducts } = useProducts({ search })

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

  return (
    <div className='w-full h-screen bg-slate-400'>
      <section className='w-[100%] h-[150px] flex items-center justify-center bg-slate-500'>
        <form className='flex items-center' onSubmit={handleSubmit}>
          <div className='w-[400px]'>
            <label>
              <input
                type='text'
                name='query'
                placeholder='Smartphone, cámara, portátil'
                className='pl-1 mr-2'
                onChange={handleSearch}
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
                onChange={handlePrice}
                className='mr-2'
              ></input>
              <span className='w-[10px]'>${filters.price}</span>
            </div>
            <div>
              <label htmlFor={categoryRef} className=' mr-1'>
                Categoria
              </label>
              <select
                name='category'
                id={categoryRef}
                onChange={handleCategory}
              >
                <option value='all'>All</option>
                <option value='Electronics'>Electrónica</option>
                <option value='Skate'>Hogar</option>
                <option value='salud y belleza'>Salud y Belleza</option>
              </select>
            </div>
          </div>
        </form>
      </section>
      <section className=' bg-slate-400 flex items-center justify-center'>
        <Products products={products} />
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
