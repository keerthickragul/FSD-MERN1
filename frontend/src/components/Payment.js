// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './PaymentCss.css'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
function Payment() {
  const[cardNumber,setCardNumber] = useState();
  const[cardholderName,setHolderName] = useState();
  const[expiryDate,setExpiryDate] = useState();
  const[amount,setAmount] = useState();
  const handlePayment = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/payment',{cardNumber,cardholderName,expiryDate,amount})
    .then(result => {console.log(result)
      toast.success('Payment Successful');
    })
    .catch(err => {console.log(err)
      toast.success('Payment Failed');
    })
  }
  return (
    <div className="payment-page">
      <form className="payment-container" onSubmit={handlePayment}>
        <h2>Payment</h2>
        <div className="payment-form">
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              placeholder="Enter your card number"
              required onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardholder-name">Cardholder Name</label>
            <input
              type="text"
              id="cardholder-name"
              placeholder="Enter cardholder name"
              required onChange={(e) => setHolderName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input
              type="text"
              id="expiry-date"
              placeholder="MM/YY"
              required onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">Amount</label>
            <input
              type="text" 
              id="cvv"
              placeholder="Amount"
              required onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="pay-btn">
            Pay Now
          </button>
        </div>
      </form>
    </div>


  );
}

export default Payment;