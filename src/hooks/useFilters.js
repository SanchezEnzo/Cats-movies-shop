import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = productsBySearch =>
    productsBySearch?.filter(
      prod =>
        (prod.category === filters.category || filters.category === 'all') &&
        prod.price >= filters.price
    )

  return { filters, filterProducts, setFilters }
}
