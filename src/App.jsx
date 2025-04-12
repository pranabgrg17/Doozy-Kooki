import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Payment from './pages/Payment/Payment';
import Success from './pages/Payment/Success'
import Failure from './pages/Payment/Failure'


const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} 
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/failure' element={<Failure/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
