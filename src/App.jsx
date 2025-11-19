import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Details from './pages/Details'
import Error from './pages/Error'
import petsLoader from './loaders/petsLoader'
import detailLoader from './loaders/detailLoader'

function App() {

  const browserRouter = createBrowserRouter([{
    path: "/",
    element: <Home/>,
    loader: petsLoader,
    hydrateFallbackElement: <p>Loading...</p>
  },{
    path: "/details/:petId",
    element: <Details/>,
    loader: detailLoader,
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
