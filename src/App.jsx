import { Route, Routes } from 'react-router-dom'
import UserLayout from './Layout/UserLayout'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'



import './App.css'
import Contact from './Pages/Contact'
import Place from './Pages/Place'
import PlaceDetails from './Pages/PlaceDetails'

function App() {
  
  return (
    <>
     <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
           <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
            <Route path="places" element={<Place />} />
            <Route path="places/:id" element={<PlaceDetails />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
