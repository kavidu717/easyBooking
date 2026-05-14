import { Route, Routes } from 'react-router-dom'
import UserLayout from './Layout/UserLayout'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'



import './App.css'

function App() {
  
  return (
    <>
     <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
           <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
