const mongoose = require('mongoose')// models/Item.js
const cartgetSchema = new mongoose.Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String }
});

module.exports = mongoose.model('cartdetails', cartgetSchema);
