import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  if (FiltersContext === undefined)
    throw new Error('FiltersProvider is not provider')

  const handlePrice = event => {
    const newPrice = event.target.value
    setFilters({ ...filters, price: newPrice })
  }

  const handleCategory = event => {
    const newCategory = event.target.value
    setFilters({ ...filters, category: newCategory })
  }

  const filterProducts = productsBySearch =>
    productsBySearch?.filter(
      prod =>
        (prod.category.name === filters.category ||
          filters.category === 'all') &&
        prod.price >= filters.price
    )

  return { filters, handlePrice, handleCategory, filterProducts }
}
