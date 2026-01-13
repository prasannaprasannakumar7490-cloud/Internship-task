
import React from 'react'

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>ShopEase</h2>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Cart ({cartCount})</li>
      </ul>
    </nav>
  )
}
