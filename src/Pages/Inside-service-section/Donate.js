import React, { useState } from 'react';
import './ServiceStyle.css';
import items from './items';
import { useCart } from '../Cart/CartContext';

const Donate = () => {
  const { addItemToCart } = useCart();

  const handleAddToCart = (item) => {
    addItemToCart(item);
  };

  return (
    <div className="donate-section">
      <div className="donate-cards-container">
        {items.slice(0, 3).map((item) => (
          <div key={item.id} className="donate-card">
            <img src={item.image} />
            <div className="donate-card-info">
              <div className="donate-card-heading">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="star-rating">
                  {[...Array(5)].map(() => (
                    <i class="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <button onClick={() => handleAddToCart(item)}>Add to cart</button>
              <div className="quantity">
                <button>-</button>
                <input type="text" value={item.quantity} />
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="donate-cards-container">
        {items.slice(3).map((item) => (
          <div key={item.id} className="donate-card">
            <img src={item.image} />
            <div className="donate-card-info">
              <div className="donate-card-heading">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="star-rating">
                  {[...Array(5)].map(() => (
                    <i class="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <button onClick={() => handleAddToCart(item)}>Add to cart</button>
              <div className="quantity">
                <button>-</button>
                <input type="text" value={item.quantity} />
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Donate;
