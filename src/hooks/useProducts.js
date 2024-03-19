export function useProducts({ search, filters }) {
  const [products, setProducts] = useState(resultShopping.content)

  const getProducts = async () => {
    if (search) {
      const res = await fetch('https://api.escuelajs.co/api/v1/products')
      const json = await res.json()
      console.log(json)

      const productsBySearch = json?.map(
        prod => prod.title.includes(search) && [[...productsBySearch], prod]
      )
      setProducts(productsBySearch)
    }
  }

  console.log(products)
  return { products, getProducts }
}
