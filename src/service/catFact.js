import { CAT_ENDPOINTS } from '../consts/catEndpoint'

export async function getRandomFact() {
  const res = await fetch(CAT_ENDPOINTS.FACT_URL)
  const data = await res.json()
  return data.fact
}
