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

app.get('/', function(req, res){
    res.render('index');
});

app.get('/home', function(req, res){
    res.render('home');
 });

 app.get('/auth/login', function(req, res){
    let title = "Login Page";
    let description = "This is login page description";

    let data = {
        myTitle: title,
        myDescription: description
    };

    res.render('login', { locals: data });
 });

 app.post('/loginConfirm', function(req, res){
     let username = req.body.login;
     let password = req.body.password;

    res.send('You are logged in username:' + username + ' password:' + password);
 });

 app.get('/aboutUs', function(req, res){
    res.render('aboutUs');
 });

 app.get('/contactUs', function(req, res){
    res.render('contactUs');
 });

 // CRUD => Ceate
 app.get('/signup', function(req, res){
    res.render('signup');
 });

 require('./DB');

 // CRUD => Ceate
 app.post('/singUpConfirm', function(req, res){
    let firstname = req.body.first_name;
    let lastname = req.body.last_name;
    let email = req.body.email;
    let phone = req.body.phone;
    let username = firstname+ " " + lastname;
    // Your Insert to database code begins
    // MongoDB, MySql, PostGres

   res.send('Your registered username, email and phone no is  : ' + username + " " + email + " " + phone );
    //    res.send('Your registered phone no is  : ' + phone);  
    // problem 1:- couldn't send the info in two lines
   
});

const userRoutes = require('./modules/user/user.route');
app.use('/user', userRoutes);

// Product CRUD API => Create
app.post('/product/create', (req, res) => {
    let prdtName = req.body.productName;
    let prdtSize = req.body.productSize;
    let prdtColor = req.body.productColor;

    let product = {
        _id: '',
        productName: prdtName,
        productSize: prdtSize,
        productColor: prdtColor
    };

    //Database insert code begins
   product._id = randomstring.generate();

    let response = {
        success: true,
        status: 200,
        message: "product successfully created",
        data:product
    };
    res.send(response);
});

// Product CRUD API => Read
app.get('/product/read', (req, res) => {

    //Fetch Data from Database
    let sampleDataFromDatabase = [
        {
            productName: "Monitor",
            productSize: "32",
            productColor: "Black",
        },
        {
            productName: "TV",
            productSize: "59",
            productColor: "Grey",
        }
    ];

    let response = {
        success: true,
        message: "Product List",
        data: sampleDataFromDatabase
    };

    res.send(response)

});

// Product CRUD API UPDATE PART-1
app.get('/product/:_id', (req, res) => {

    let id = req.params._id;

    //Fetch Data from Database

    let sampleDataFromDatabase = {
        _id: "oijkdf8uu324df",
        productName: "Monitor",
        productSize: "32",
        productColor: "Black",
    }

    let response = {
        success: true,
        message: "Product details",
        data: sampleDataFromDatabase
    };

    res.send(response)

});


// Product CRUD API UPDATE PART-2
app.put('/product/update/:_id', (req, res) => {  // we can use either post or put

    let id = req.params.id;

    let prdtName = req.body.productName;
    let prdtSize = req.body.productSize;
    let prdtColor = req.body.productColor;

    let product = {
        _id: '',
        productName: prdtName,
        productSize: prdtSize,
        productColor: prdtColor
    };

    //Database insert code begins
   product._id = randomstring.generate();

    let response = {
        success: true,
        status: 200,
        message: "Product successfully updated",
        data:product
    };
   
    res.send(response);
});

// Product CRUD API => Delete
app.delete('/product/delete/:_id', (req, res) => {

    //Fetch Data from Database

    let id = req.params.id;
    
    //Database relate stuff begin

    let response = {
        success: true,
        status: 200,
        message: "Product successfully deleted",
        data:[]
    };
    res.send(response);

});

app.get('/user/search/:id', (req, res) => {

    let id= req.params.id;

    var stream = user.search(function (search) {
        search.firstName().is("John");
        search.lastName().is("Doe");
    });
   

    //Fetch Data from Database

    let sampleDataFromDatabase = {
        _id: "oijkdf8uu324df",
        firstName: "Suresh",
        lastName: "Shrestha",
        email: "suresh.shrestha@gmail.com",
        phoe: "12345340"
    }

    let response = {
        success: true,
        message: "User details",
        data: sampleDataFromDatabase
    };

    res.send(response)

});

app.listen(3000);

console.log('Server is started at http://localhost:3000');

//get => get data from server
//post => inset data to server
//put => update all data
//patch => partial data update
//delete => delete data

// contact us
// about us
// register page
// bootstrap design

// Git Branching Flow
// master
// develop
// feature
// hotFix
// git branch <Branch Name> => it will create a branch
// git branch => listing all branch
// git branch -d <Branch Name> => it will delete the branch

// Method  | filename
// create => form
// read => index
// update => form
// delete => no file name

//npm install -g nodemon