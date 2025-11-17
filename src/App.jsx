import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Details from './pages/Details'
import Error from './pages/Error'

function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="details/:petId" element={<Details/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default App
