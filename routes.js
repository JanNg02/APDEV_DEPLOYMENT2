const express = require('express');

const controller = require('./Controller/controller.js');

const app = express(); 

//app.get('/', controller.startIndex);

app.get('/', controller.generateShop);

app.get('/shop', controller.generateShop);
app.get('/profile', controller.generateProfile);

module.exports = app; 