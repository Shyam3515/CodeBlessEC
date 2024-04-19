import React from 'react'
import './App.css'
import LoginPage from './components/Authentication/LoginPage';
import CartPage from './components/CartPage/CartPage';
import Home from './components/Home/Home'
import MyOrderPage from './components/MyOrders/MyOrderPage';
import Navbar from './components/Navbar/Navbar'
import ProductsPage from './components/Products/ProductsPage';
import SingleProduct from './components/SingleProduct/SingleProduct';
import SignupPage from './components/Authentication/SignupPage';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      {/* <main><Home /></main> */}
      {/* <ProductsPage />
      <SingleProduct />
      <CartPage />
      <MyOrderPage /> */}
      {/* <LoginPage /> */}
      <SignupPage />
    </div>
  )
}

export default App
