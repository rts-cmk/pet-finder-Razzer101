import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Error from './pages/Error'
import dogLoader from './loaders/dogLoader'
import catLoader from './loaders/catLoader'
import detailLoader from './loaders/detailLoader'
import favoriteLoader from './loaders/favoriteLoader'
import PetSection from './components/PetSection'

function App() {

  const browserRouter = createBrowserRouter([{
    path: "/",
    element: <Home/>,
    children: [
      {
        path:"dogs",
        element: <PetSection/>,
        loader: dogLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path:"cats",
        element: <PetSection/>,
        loader: catLoader,
        hydrateFallbackElement: <p>Loading...</p>,
      }
    ]
  },{
    path: "/details/:petId",
    element: <Details/>,
    loader: detailLoader,
    hydrateFallbackElement: <p>Loading...</p>
  },{
    path: "/favorites",
    element: <Favorites/>,
    loader: favoriteLoader,
    hydrateFallbackElement: <p>Loading...</p>
  },{
    path: "*",
    element: <Error/>
  }])

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
