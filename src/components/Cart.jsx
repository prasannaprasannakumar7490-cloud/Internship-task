
import React from 'react'

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          {item.name} - ₹{item.price}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      {cart.length > 0 && <button className="checkout">Checkout</button>}
    </div>
  )
}
