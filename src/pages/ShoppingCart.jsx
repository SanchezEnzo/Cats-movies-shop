import { useRef, useState } from 'react'
import { ReturnIcon } from '../components/Icons'
import { Link } from 'react-router-dom'
import resultShopping from '../mocks/resultShopping.json'
import { AddToCart } from '../components/Icons'

export default function ShoppingCart() {
  const [products, setProducts] = useState(resultShopping.content)
  const priceRef = useRef()
  const categoryRef = useRef()

  return (
    <div className='w-full h-full bg-slate-400 flex flex-col items-center'>
      <section className='w-[80%] h-[150px] flex items-center justify-center'>
        <form className='flex items-center'>
          <button>Search</button>
          <label>
            <input
              type='text'
              name='query'
              placeholder='Smartphone, cámara, portátil'
              className='pl-1 ml-2'
              min='0'
              max='1000'
            />
          </label>
          <div className='ml-10 flex flex-col items-center'>
            <div>
              <label htmlFor={priceRef} className='mr-1'>
                Precio
              </label>
              <input type='range' name='price' id={priceRef}></input>
            </div>
            <div>
              <label htmlFor={categoryRef} className=' mr-1'>
                Categoria
              </label>
              <select name='category' id={categoryRef}>
                <option value='Electrónica'>Electrónica</option>
                <option value='Hogar'>Hogar</option>
                <option value='Salud y Belleza'>Salud y Belleza</option>
              </select>
            </div>
          </div>
        </form>
      </section>
      <section>
        <ul className='h-full w-full grid products gap-7'>
          {products.map(product => (
            <li
              className='flex flex-col justify-between border p-3 border-black bg-slate-500 rounded-xl'
              key={product.id}
            >
              <div>
                <span className='font-bold'>{product.name}</span>
                <p className='leading-5 mb-2 mt-1'>{product.description}</p>
              </div>
              <div className=''>
                <img
                  className='rounded-xl'
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div
                  className='mt-2 flex justify-center gap-2 items-center
                '
                >
                  <span className='font-bold'>${product.price}</span>
                  <button>
                    <AddToCart />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <br />
      <footer className='mt-10 mb-3 w-[80%] flex flex-col items-center'>
        <div className='border-t-black border-t border-t-[solid] h-[2px] p-0 mt-[20px] mr-auto ml-auto w-[inherit] mb-10'></div>
        <p>Todos los derechos reservados © - 2024</p>
      </footer>
      <Link to='/' className='absolute top-4 left-4 flex flex-col items-center'>
        <ReturnIcon />
        <span className='text-white'>Go back</span>
      </Link>
    </div>
  )
}
