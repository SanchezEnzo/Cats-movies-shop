import { Link } from 'react-router-dom'
import appCatImage from '../media/appCat.png'
import searchMovies from '../media/searchMovies.png'
import shoppingCart from '../media/shoppingCart.png'

export default function Home() {
  return (
    <main className='h-full w-full bg-zinc-900'>
      <section className='text-[#ededed] h-screen w-full'>
        <article className='fixed top-0 left-0 w-[33%] h-screen border flex justify-center'>
          <Link to='/appcat' className='w-full flex justify-center'>
            <h2 className='mt-4 text-2xl'>AppCat</h2>
            <img
              src={appCatImage}
              alt='Screenshot de la aplicacion de facts cat'
              className='absolute h-screen w-full'
            />
          </Link>
        </article>
        <article className='fixed top-0 left-[33.5%] w-[33%] h-screen border flex justify-center'>
          <Link to='/searchmovie' className='w-full flex justify-center'>
            <h2 className='mt-4 text-2xl'>Search Movies</h2>
            <img
              src={searchMovies}
              alt='Screenshot de la aplicacion de SerachMovies'
              className='absolute h-screen w-full'
            />
          </Link>
        </article>
        <article className='fixed top-0 left-[67%] w-[33%] h-screen border flex justify-center'>
          <Link to='/shoppingcart' className='w-full flex justify-center'>
            <h2 className='mt-4 text-2xl'>Shopping Cart</h2>
            <img
              src={shoppingCart}
              alt='Screenshot de la aplicacion de ShoppingCart'
              className='absolute h-screen w-full'
            />
          </Link>
        </article>
      </section>
    </main>
  )
}
