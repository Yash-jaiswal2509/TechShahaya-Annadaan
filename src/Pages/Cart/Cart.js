import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'


const Cart = () => {
  const { cart, updateQuantity, removeItemFromCart,clearCart } = useCart();

  const handleUpdateQuantity = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-wrapper">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart-container-item">
                  <img src={item.image} />
                  <div className='cart-item-info'>
                    <span>{item.name}</span>
                    <div className="cart-buttons">
                      <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                      <input type='text' value={item.quantity} />
                      <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-clear-cart">
            <button>Checkout</button>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
