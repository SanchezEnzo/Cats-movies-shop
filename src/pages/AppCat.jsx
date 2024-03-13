import { useCatFact } from '../hooks/useCatFact'
import { useCatImage } from '../hooks/useCatImg'
import { ReturnIcon } from '../components/Icons'
import { Link } from 'react-router-dom'

export default function AppCat() {
  const { fact, handleClickFact } = useCatFact()
  const { img, handleClickImg } = useCatImage()

  return (
    <div className='h-screen w-full bg-pink-500 flex flex-col items-center justify-between font-bold'>
      <section className='flex flex-col mt-10 max-w-[70%] gap-3'>
        {fact && <span className='text-white'>{fact}</span>}
        <button
          onClick={handleClickFact}
          className='text-pink-950 hover:text-pink-900'
        >
          Get new fact!
        </button>
      </section>
      <section className='h-[70%] mt-[2%] flex flex-col items-center gap-4'>
        {(img || img === undefined) && (
          <img
            src={img}
            alt='Random cat generate with an API'
            className='max-h-[65%] rounded-xl'
          ></img>
        )}
        <button
          onClick={handleClickImg}
          className='text-pink-950 hover:text-pink-900'
        >
          Get new image!
        </button>
      </section>
      <Link to='/' className='fixed top-4 left-4 flex flex-col items-center'>
        <ReturnIcon />
        <span>Go back</span>
      </Link>
    </div>
  )
}

//TODO: Agregar sonido de foto cada vez que carga una nueva imagen
