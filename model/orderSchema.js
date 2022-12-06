const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema( {
    orderNumber: { type: Number, required: true }, 
    pname:[String],
    username: { type: String, required: true },
    address: { type: String, required: true },
    contact_no: { type: Number, required: true },
    date: { type: String, required: true },
    price: { type: Number, required: true },
    items:[Number],
});
//name of the schema, orderSchema (the var)
module.exports = mongoose.model('order', orderSchema);