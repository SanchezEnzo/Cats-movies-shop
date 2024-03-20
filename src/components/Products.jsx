import { AddToCart } from './Icons'

export function Products({ products }) {
  const hasProducts = products.length > 0

  return (
    hasProducts && (
      <ul className=' grid products gap-7 w-[80%]'>
        {products.map(prod => (
          <li
            className='flex flex-col justify-between border p-3 border-black bg-slate-500 rounded-xl'
            key={prod.id}
          >
            <div>
              <span className='font-bold'>{prod.name}</span>
              <p className='leading-5 mb-2 mt-1'>{prod.description}</p>
            </div>
            <div className=''>
              <img className='rounded-xl' src={prod.imageUrl} alt={prod.name} />
              <div
                className='mt-2 flex justify-center gap-2 items-center
                '
              >
                <span className='font-bold'>${prod.price}</span>
                <button>
                  <AddToCart />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  )
}
