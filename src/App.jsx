import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage'


function App() {

  // const cartList = useSelector(state => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
