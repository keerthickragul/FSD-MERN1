const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const SportsModel = require('./model/sports');
const PaymentModel = require('./model/Payment');
const ItemModel = require('./model/ItemSchema');
const CartModel = require('./model/CartSchema');
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/SportsStore");

app.post("/login",(req,res) => {
    const {email,password} = req.body;
    SportsModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            }
            else{

                res.status(400).json("Password Incorrect");
            }
        }
        else{
            res.status(404).json("No record existed");
        }
    })
    .catch(err => {
        console.error("Error during login:",err);
        re.status(500).json("Internal Server Error");
    });
});

app.post('/register',(req,res) => {
    
    SportsModel.create(req.body)
    .then(SportsStores => res.json(SportsStores))
    .catch(err => res.json(err))
})

//sending payment details
app.post('/payment',(req,res) => {
    PaymentModel.create(req.body)
    .then(PaymentStores => res.json(PaymentStores))
    .catch(err => res.json(err))
})
//sending payment details



// getting items from database
app.get('/getitems',(req,res) => {
   ItemModel.find()
   .then(items => res.json(items))
   .catch(err => res.json(err))
})

// getting items from database



// sending cart details
app.post('/cartitems',(req,res) => {
    CartModel.create(req.body)
    .then(cartitems => res.json(cartitems))
    .catch(error => res.json(error))
})
// sending cart details


//getting back the cart details
app.get('/getcarts',(req,res) => {
    CartModel.find()
    .then(values => res.json(values))
    .catch(error => res.json(error))
})
//getting back the cart details


//Insert items 
app.post('/additems',(req,res) => {
    ItemModel.create(req.body)
    .then(insert => res.json(insert))
   .catch(err => res.json(err))
})

//Insert items



//Remove cart items
app.delete('/deleteitem/:id', (req, res) => {
    const itemId = req.params.id;
    ItemModel.deleteOne({itemId})
      .then(() => res.json({ message: 'Item deleted successfully' }))
      .catch(err => res.status(500).json({ error: 'Something went wrong' }));
  });

//Remove cart items 

const port = 3001
app.listen(port,() => {
    console.log("Server is Running...")
    console.log(`Port Running on ${port}...`)
})