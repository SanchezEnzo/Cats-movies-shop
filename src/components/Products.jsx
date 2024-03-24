import { AddToCart } from './Icons'

export function Products({ products }) {
  const hasProducts = products?.length > 0
  console.log(products)

  return (
    hasProducts && (
      <ul className=' grid products w-[65%] gap-5 my-10'>
        {products.map(prod => (
          <li
            className='flex flex-col justify-between items-center text-center border p-3 border-black bg-slate-500 rounded-xl w-[250px] aspect-auto'
            key={prod.id}
          >
            <div>
              <span className='font-bold'>{prod.title}</span>
            </div>
            <div className=''>
              <img
                className='rounded-xl '
                src={prod.images[0]}
                alt={prod.title}
              />
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
