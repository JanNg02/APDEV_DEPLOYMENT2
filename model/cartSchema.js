const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema( {
    username: { type: String},
    productName: { type: String},
    items: { type: Number },
    price: { type: Number},     
});
//name of the schema, usersSchema (the var)
module.exports = mongoose.model('cart', cartSchema);