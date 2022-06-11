import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Checkout from './pages/checkout/Checkout'
import ContactPage from './pages/contact/ContactPage'
// import AdminDashboard from './pages/dashboard/AdminDashboard'
import HomePage from './pages/home/HomePage'
import Product from './pages/product/Product'
import Products from './pages/products/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/all-product' element={<Products />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* <Route path='/admin/dashboard' element={< AdminDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App