import { useCallback, useState } from 'react'
import { useFilters } from './useFilters'

const API_URL = 'https://api.escuelajs.co/api/v1/products'

export function useProducts({ search }) {
  const [products, setProducts] = useState('')
  const { filters, filterProducts } = useFilters()

  const getProducts = useCallback(async () => {
    if (search) {
      const res = await fetch(API_URL)
      const json = await res.json()

      if (!json) throw new Error('No se puedo acceder a la API')
      const productsBySearch = json?.filter(prod =>
        prod.title.toLowerCase().includes(search.toLowerCase())
      )

      const filteredProducts = filterProducts(productsBySearch)

      console.log(filteredProducts)
      if (filteredProducts.length == 0) setProducts('')
      setProducts(filteredProducts)
    }
  }, [search, filters.price, filters.category])

  return { products, getProducts }
}
