
const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String
    }
})

module.exports = mongoose.model('Ecomproduct',productschema)