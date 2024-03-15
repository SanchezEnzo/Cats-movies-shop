import { useEffect, useState } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (search.match(/^\d+$/)) {
      setError('No se puede utilizar números al inicio')
      return
    }
    setError('')
  }, [search])

  return { error, setSearch, search, setError }
}
