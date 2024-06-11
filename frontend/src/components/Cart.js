import React, { useEffect, useState } from 'react';
import './CartCss.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cart() {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);

  const handlePayment = () => {
    navigate('/payment');
  };

  useEffect(() => {
    axios.get('http://localhost:3001/getcarts')
      .then(response => {
        setValues(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  const removeFromCart = (index,id) => {
    const updatedValues = values.filter((item, itemIndex) => itemIndex !== index);
    setValues(updatedValues);
    axios.delete('http://localhost:3001/removecarts/{id}')
    .then(response => {
      console.log('item removed from cart',response.data)
    })
    .catch(error =>{
      console.error('Error detected',error);
    })

  };

  const calculateSubtotal = () => {
    return values.reduce((acc, item) => acc + item.price, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.175;
  const total = subtotal + tax;

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {values.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {values.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">Price: &#8377; {item.price}</p>
                <p className="cart-item-rating">Rating: {item.rating}</p>
                <p className="cart-item-description">Description: {item.description}</p>
                <button className='remove-button' onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-summary">
        <div>Subtotal: &#8377; {subtotal.toFixed(2)}</div>
        <div>Tax: &#8377; {tax.toFixed(2)}</div>
        <div>Total: &#8377; {total.toFixed(2)}</div>
        <button className="checkout-btn" onClick={handlePayment}>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Cart;
