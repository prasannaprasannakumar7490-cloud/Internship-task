
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'

export default function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Products addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </>
  )
}
