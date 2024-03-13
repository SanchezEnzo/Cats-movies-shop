import { useEffect, useState } from 'react'
import { getRandomFact } from '../service/catFact'

export function useCatFact() {
  const [fact, setFact] = useState('')

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  async function handleClickFact() {
    getRandomFact().then(newFact => setFact(newFact))
  }

  return { fact, handleClickFact }
}
