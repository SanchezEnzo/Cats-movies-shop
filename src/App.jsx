import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import AppCat from './pages/AppCat'
import SearchMovies from './pages/SearchMovies'
import ShoppingCart from './pages/ShoppingCart'
import { FiltersProvider } from './contexts/filters'

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
      element: (
        <FiltersProvider>
          <ShoppingCart />
        </FiltersProvider>
      )
    }
  ]

  const elements = useRoutes(routes)

  return elements
}
