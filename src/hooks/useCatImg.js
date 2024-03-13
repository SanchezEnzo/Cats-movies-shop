import { useEffect, useState } from 'react'
import { getRandomImage } from '../service/catImg'

export function useCatImage() {
  const [img, setImg] = useState()

  useEffect(() => {
    getRandomImage().then(newImg => setImg(newImg))
  }, [])

  async function handleClickImg() {
    getRandomImage().then(newImg => setImg(newImg))
  }
  return { img, handleClickImg }
}
