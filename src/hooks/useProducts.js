import { useState } from 'react'

export function useProducts({ search, filters }) {
  const [products, setProducts] = useState('')

  const getProducts = async () => {
    if (search) {
      const res = await fetch('https://api.escuelajs.co/api/v1/products')
      const json = await res.json()

      const productsBySearch = json?.filter(prod =>
        prod.title.toLowerCase().includes(search.toLowerCase())
      )

      // const mappedProducts = productsBySearch?.map(prod => {
      //   const newProducts = []

      //   prod.description.length > 20
      //     ? [[...newProducts], prod]
      //     : [
      //         [...newProducts],
      //         {
      //           ...prod,
      //           description:
      //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      //         }
      //       ]
      //   return newProducts
      // })

      setProducts(productsBySearch)
      console.log(productsBySearch)
    }
  }
  return { products, getProducts }
}
