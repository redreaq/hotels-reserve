import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelIsIdPage from './pages/HotelIsIdPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/states/hotels.slice'
import PrincipalHeader from './components/shared/PrincipalHeader'
import ProtectedRoutes from './pages/ProtectedRoutes'
import ReservationsPages from './pages/ReservationsPages'

function App() {

  const hotels = useSelector(states => states.hotels)

  const dispatch = useDispatch()
  
  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])


  return (
    <div>
      <PrincipalHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels/:id' element={<HotelIsIdPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/reservations' element={<ReservationsPages/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
