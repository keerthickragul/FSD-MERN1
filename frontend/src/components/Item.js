import React from 'react';
import './Itemcss.css';
import axios from 'axios';
import { useState } from 'react';

function Item({ item }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddToCart = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3001/cartitems', item);
      console.log('Item added to cart:', response.data);
    } catch (error) {
      setError('Failed to add item to cart');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="outer3">
      <div className="inner3">
        <img className="itemimage" src={item.image} alt={item.name} />
        <p className="itemname">{item.name}</p>
        <p className="itemprice" style={{ paddingRight: 80 }}><span>&#8377; {item.price}</span></p>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`fa fa-star ${index < item.rating ? 'checked' : ''}`}></span>
          ))}
        </div>
        <p className="itemdescription">{item.description}</p>
        <div>
          <button className="itembtn" onClick={handleAddToCart} disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Cart'}
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Item;
