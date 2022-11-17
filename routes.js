const express = require('express');

const controller = require('./Controller/controller.js');

const app = express(); 

app.get('/', controller.startIndex);

app.get('/shop', controller.generateShop);
app.get('/AboutUs2', controller.generateAboutUs);
app.get('/profile', controller.generateProfile);
app.get('/adminView', controller.generateAdminView);

module.exports = app; 