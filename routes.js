const express = require('express');
const { model } = require("mongoose");

const controller = require('./Controller/controller.js');

const app = express(); 

app.get('/', controller.startIndex);

app.get('/shop', controller.generateShop);
app.get('/AboutUs2', controller.generateAboutUs);
app.get('/adminView', controller.generateAdminView);

//Login
app.post('/save', controller.saveUser);
app.get('/register', controller.generateRegis);
//app.post('/login', controller.login)

//Profile
app.get('/profile', controller.generateProfile);
app.get('/orderHistory', controller.generateOrderHistory);
app.post('/order', controller.generateOrder);

//Admin View
//Admin Add
app.get('/adminAdd', controller.generateAdminAdd); 
app.post('/add', controller.addItems);

// Admin Remove

//Item
app.post('/item', controller.generateItemPage); 

module.exports = app; 