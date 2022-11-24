const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema( {
    orderNumber: Number, 
    pname:[String],
    username: String,
    address: String,
    contact_no: Number,
    date: String,
    price: Number,
    items:[Number],
});
//name of the schema, orderSchema (the var)
module.exports = mongoose.model('order', orderSchema);