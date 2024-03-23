import { useState, createContext } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({ price: 0, category: 'all' })

  return (
    <FiltersContext.Provider value={(filters, setFilters)}>
      {children}
    </FiltersContext.Provider>
  )
}
