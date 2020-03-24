var express = require('express');
var es6Renderer = require('express-es6-template-engine');
var bodyParser = require('body-parser')
var randomstring = require("randomstring");

var app = express();
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

 require('./DB');

// Routes
const userRoutes = require('./modules/user/user.route');
app.use('/api/user', userRoutes);

const productRoutes = require('./modules/product/product.route');
app.use('/api/product', productRoutes);

app.listen(3000);

console.log('Server is started at http://localhost:3000');