import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import AppCat from './pages/AppCat'
import SearchMovies from './pages/SearchMovies'
import ShoppingCart from './pages/ShoppingCart'

export default function App() {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/appcat',
      element: <AppCat />
    },
    {
      path: '/searchmovie',
      element: <SearchMovies />
    },
    {
      path: '/shoppingcart',
      element: <ShoppingCart />
    }
  ]

  const elements = useRoutes(routes)

  return elements
}
