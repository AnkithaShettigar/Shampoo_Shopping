import React, { useEffect, useState } from 'react';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ImageSlider from './Slider';

const Content = ({ addToCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch('http://3.7.252.58:4001/product/getAllProduct/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    } catch (error) {
      throw error;
    }
  }, []);
  return (
    <div style={{ marginTop: '50px' }}>
      <div className="main-container">
        {' '}
        <div className="product-offer">
          <div className="slider">
            <ImageSlider />
          </div>
          <div className="offer1"></div>
          <div className="offer2"></div>
        </div>
        <div className="product-container">
          {data && data.length > 0 ? (
            data.map((product) => (
              <div>
                {' '}
                <div key={product.id} className="product-item">
                  <img src={product.imageUrl} alt="" className="product-img" />
                  <br />
                  <span className="product-name">{product.name}</span>
                  <br />
                  <span className="product-desc">{product.description}</span>
                  <p className="product-rating">
                    <span className="product-rate">{product.rating}</span>
                    <FontAwesomeIcon icon={faStar} className="product-icon" />
                  </p>
                  <span className="product-price">&#8377;{product.price}</span>
                  <span className="product-total">
                    &#8377;{product.price + product.discountAmount}
                  </span>
                  <span className="product-percentage">
                    {Math.round(
                      (product.discountAmount / product.price +
                        product.discountAmount) *
                        100
                    )
                      .toFixed(2)
                      .slice(0, 2)}
                    % <span>off</span>
                  </span>{' '}
                  <br />
                  <span className="product-save">
                    Your saving upto &#8377;{product.discountAmount}
                  </span>
                  <p className="product-review">Review {product.reviewCount}</p>
                  <button
                    className="addcart-btn"
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
