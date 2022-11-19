const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema( {
    name: String,
    category: String,
    price: Number,
    stock: Number,
    pic: String,

});
//name of the schema, productsSchema (the var)
module.exports = mongoose.model('products', productsSchema);