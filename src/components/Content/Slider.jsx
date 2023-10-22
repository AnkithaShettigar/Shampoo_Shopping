import React, { useState, useEffect } from 'react';
import AddData from './AddData';
import Cart from './Cart/Cart';

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = AddData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 2 seconds (2000 milliseconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [images.length]); // Include 'images.length' as a dependency

  return (
    <div>
      <Cart />
      <img
        src={images[currentIndex].Image} // Use the correct property name 'Image'
        alt={`Product ${currentIndex + 1}`}
        className="display-images"
      />
    </div>
  );
}

export default ImageSlider;
