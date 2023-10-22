import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
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
      <Header
        cart={cart}
        addToCart={addToCart}
        calculateTotalPrice={calculateTotalPrice}
        removeFromCart={removeFromCart}
      />
      <Content addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
