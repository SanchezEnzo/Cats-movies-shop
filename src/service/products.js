import { API_URL } from '../consts/productsEndpoint'

export async function searchProducts(search) {
  if (!search) return []
  try {
    const res = await fetch(API_URL)
    if (!res.ok) {
      throw new Error('Error searching products')
    }
    const json = await res.json()

    if (!json) throw new Error('No se puedo acceder a la API')
    const productsBySearch = json?.filter(prod =>
      prod.title.toLowerCase().includes(search.toLowerCase())
    )

    return productsBySearch?.map(prod => ({
      ...prod,
      title: prod.title,
      id: prod.id,
      price: prod.price,
      category: prod.category.name
    }))
  } catch {
    throw new Error('Error searching products')
  }
}
