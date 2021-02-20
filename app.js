const express = require('express');
const path = require('path');
const app = express();

const productRoutes = require(path.join(__dirname, 'api', 'routes', 'products.js'));
const orderRoutes = require(path.join(__dirname, 'api', 'routes', 'orders.js'));

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

module.exports = app;