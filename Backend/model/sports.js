const mongoose = require("mongoose")

const SportsSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const SportsModel = mongoose.model("registers",SportsSchema)
module.exports = SportsModel