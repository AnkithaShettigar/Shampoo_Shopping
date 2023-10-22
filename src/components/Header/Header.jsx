import './Header.css';
const Header = ({ cart, removeFromCart, calculateTotalPrice }) => {
  return (
    <div>
      <div className="header-container">
        <p className="title">Shopping Cart</p>

        <div className="cart-img-container">
          <div className="cart-img"></div>
        </div>

        <div className="cart-count">{cart.length}</div>

        <div>
          <div className="cart-container">
            <div id="cart-root"></div>
            <div className="cart-sidebar">
              <div className="cart-head">My Cart</div>
              {cart.length > 0 ? (
                <div className="cart-items">
                  {cart.map((product) => (
                    <div key={product.id} className="cart-item">
                      <div className="cart-item-details">
                        <span>{product.name}</span>
                        <span>${product.price}</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="btn-remove"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Your cart is empty</p>
              )}

              <div className="cart-foot">
                <h3>Total</h3>
                <h2 id="cart-total">
                  &#8377; {calculateTotalPrice().toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
