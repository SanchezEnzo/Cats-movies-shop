import { CAT_ENDPOINTS } from '../consts/catEndpoint'

export async function getRandomImage() {
  const res = await fetch(CAT_ENDPOINTS.IMG_URL)
  const data = await res.json()
  return data[Math.round(Math.random() * 10)].url
}
