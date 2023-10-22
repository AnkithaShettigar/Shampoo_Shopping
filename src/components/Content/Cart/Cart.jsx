import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    console.log('addtocart', productId);

    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const calculateTotalPrice = () => {
    if (cart && cart.length > 0) {
      return cart.reduce((total, product) => total + product.price, 0);
    } else {
      return 0; // Return 0 if cart is not defined or is empty
    }
  };
  return (
    <div>
      <div className="cart-container">
        <div id="cart-root"></div>
        <div className="cart-sidebar">
          <div className="cart-head">My Cart</div>

          {cart.length > 0 && (
            <div className="cart-items">
              <ul>
                {cart.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price}
                    <button onClick={() => removeFromCart(product.id)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="cart-foot">
            <h3>Total</h3>
            <h2 id="cart-total">&#8377; {calculateTotalPrice().toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
