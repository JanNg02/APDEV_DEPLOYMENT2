const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema( {
    productNumber:{ type: Number, required: true }, 
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true }, 
    pic: { type: String, required: true }
});
//name of the schema, productsSchema (the var)
module.exports = mongoose.model('products', productsSchema);