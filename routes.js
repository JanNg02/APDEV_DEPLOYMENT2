const express = require('express');
const { model } = require("mongoose");

const controller = require('./Controller/controller.js');

const app = express(); 

const isAuth = (req, res, next)=>{
    if(req.session.isAuth){
        next()
    } else {
        res.redirect('/')
    }
}

app.get('/', controller.startIndex);

app.get('/shop', isAuth, controller.generateShop);
app.get('/AboutUs2', controller.generateAboutUs);
app.get('/adminView', controller.generateAdminView);

//Filter
app.post('/filter', controller.generateFiltered); 

//Login
app.post('/save', controller.saveUser);
app.get('/register', controller.generateRegis);
app.post('/login', controller.loginUser)

//Profile
app.get('/profile', controller.generateProfile);
app.get('/orderHistory', controller.generateOrderHistory);
app.post('/order', controller.generateOrder);
app.get('/settings', controller.generateSettings);
app.post('/editUser', controller.editUser);  

//Admin View
//Admin Add
app.get('/adminAdd', controller.generateAdminAdd); 
app.post('/add', controller.addItems);

// Admin Remove
app.get('/adminRemove', controller.generateRemoveAdmin);
app.post('/del', controller.deleteItems);

//Admin Edit
app.get('/adminEdit', controller.generateAdminEdit);
app.post('/itemEdit', controller.generateItemEdit);
app.post('/edit', controller.editItem); 

//Item
app.post('/item', controller.generateItemPage); 
app.post('/cart', controller.addCart)
//app.get('/cart', controller.getCart)
module.exports = app; 