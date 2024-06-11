// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Insertcss.css';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
function Insert() {
  const[name,setName] = useState();
  const[price,setPrice] = useState();
  const[image,setImage] = useState();
  const[rating,setRating] = useState();
  const[description,setDescription] = useState();
  const handleAddItem = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/additems',{name,price,image,rating,description})
    .then(result => {console.log(result)
      toast.success('Item Added Successful');
    })
    .catch(err => {console.log(err)
      toast.success('Process Failed');
    })
  }
  return (
    <div className="itemadd-page">
      <form className="itemadd-container" onSubmit={handleAddItem}>
        <h2>Insert Items</h2>
        <div className="itemadd-form">
          <div className="itemadd-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              id="item-name"
              placeholder="Enter item Name"
              required onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="itemadd-group">
            <label htmlFor="item-price">Price</label>
            <input
              type="text"
              id="item-price"
              placeholder="Enter item Price"
              required onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="itemadd-group">
            <label htmlFor="item-image">Image</label>
            <input
              type="text"
              id="item-image"
              placeholder="Enter image url"
              required onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="itemadd-group">
            <label htmlFor="item-rating">Rating</label>
            <input
              type="text" 
              id="item-rating"
              placeholder="Enter item rating"
              required onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="itemadd-group">
            <label htmlFor="item-description">Description</label>
            <input
              type="text" 
              id="item-description"
              placeholder="Description"
              required onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="itemadd-btn">
            Add
          </button>
        </div>
      </form>
    </div>


  );
}

export default Insert;