import { useState } from 'react'

export function useSearchShopping({ setError }) {
  const [search, setSearch] = useState('')

  return { search, setSearch }
}
