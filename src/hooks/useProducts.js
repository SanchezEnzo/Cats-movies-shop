import { useCallback, useRef, useState } from 'react'
import { useFilters } from './useFilters'
import { searchProducts } from '../service/products'

export function useProducts({ search }) {
  const [products, setProducts] = useState('')
  const { filterProducts, filters } = useFilters()
  const isSearchChange = useRef(search)

  const getProducts = useCallback(async () => {
    if (isSearchChange.current === '') isSearchChange.current = search === ''
    if (search) {
      try {
        const mappedMovies = await searchProducts(search)
        const filteredProducts = filterProducts(mappedMovies)
        if (filteredProducts.length == 0) setProducts('')
        setProducts(filteredProducts)
      } catch {
        console.error('Error searching products')
        return null
      }
    }
  }, [search, filters.price, filters.category])

  return { products, getProducts }
}
