import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import cart from '../images/grocery-store.png';
import './Homecss.css';
import axios from 'axios';

function Home() {
  const [items, setItems] = useState([]);
  const nav = useNavigate();

  const handleCartClick = () => {
    nav('/cart');
  };

  useEffect(() => {
    axios.get('http://localhost:3001/getitems')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div className='wholepage'>
      <div className='itemdiv'>
        <h3 >PRODUCTS</h3>
        <img src={cart} alt='cartitem' onClick={handleCartClick} className='cartimg' />
        <span id='counter' className='span-count'></span>
      </div>
      <br />
      <div className='row'>
        {items.slice(0, 4).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className='row'>
        {items.slice(4, 8).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className='row'>
        {items.slice(8, 12).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className='row'>
        {items.slice(12, 16).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className='row'>
        {items.slice(16, 20).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className='cartTab'>
        <h1 className='carth1'>Shopping Cart</h1>
        <div className='listCart'>
          <div className='item'>
            <div className='image'>
              <img src='football.jpg' alt='football' />
            </div>
            <div className='name'>Name</div>
            <div className='totalprice'>$200</div>
            <div className='quantity'>
              <span className='minus'>-</span>
              <span>1</span>
              <span className='plus'>+</span>
            </div>
          </div>
        </div>
        <div className='cartbtn'>
          <button className='close'>CLOSE</button>
          <button className='checkout'>CHECK OUT</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
