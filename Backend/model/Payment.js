const mongoose = require('mongoose');

// Define schema for payment information
const paymentSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true
  },
  cardholderName: {
    type: String,
    required: true
  },
  expiryDate: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

// Define a model for the schema
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
