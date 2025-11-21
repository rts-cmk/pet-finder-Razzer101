import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Error from './pages/Error'
import PetSection from './components/PetSection'
import DetailSection from './components/DetailSection'
import FavoritesSection from './components/FavoritesSection'
import dogLoader from './loaders/dogLoader'
import catLoader from './loaders/catLoader'
import detailDogLoader from './loaders/detailDogLoader'
import detailCatLoader from './loaders/detailCatLoader'
import favoriteDogLoader from './loaders/favoriteDogLoader'
import favoriteCatLoader from './loaders/favoriteCatLoader'

function App() {

  const dogs = "dogs"
  const cats = "cats"

  const browserRouter = createBrowserRouter([{
    path: "/",
    element: <Home/>,
    children: [
      {
        path: `${dogs}`,
        element: <PetSection animal={dogs}/>,
        loader: dogLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: `${cats}`,
        element: <PetSection animal={cats}/>,
        loader: catLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      }
    ]
  },{
    path: "/details",
    element: <Details/>,
    children: [
      {
        path: `${dogs}/:petId`,
        element: <DetailSection animal={dogs}/>,
        loader: detailDogLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: `${cats}/:petId`,
        element: <DetailSection animal={cats}/>,
        loader: detailCatLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      }
    ]
  },{
    path: "/favorites",
    element: <Favorites/>,
    children: [
      {
        path: `${dogs}`,
        element: <FavoritesSection animal={dogs}/>,
        loader: favoriteDogLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: `${cats}`,
        element: <FavoritesSection animal={cats}/>,
        loader: favoriteCatLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      }
    ]
  },{
    path: "*",
    element: <Error/>
  }])

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App