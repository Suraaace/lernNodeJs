var express = require('express');
var es6Renderer = require('express-es6-template-engine');
var bodyParser = require('body-parser')

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


// CRUD API => Create
app.post('/user/create', (req, res) => {
    let myFirstname = req.body.firstName;
    let myLastname = req.body.lastName;
    let myEmail = req.body.email;

    let user = {
        _id: '',
        firstname: myFirstname,
        lastname: myLastname,
        email: myEmail
    };

    //Database insert code begins
    var randomstring = require("randomstring");
    user._id = randomstring.generate();

    let response = {
        success: true,
        status: 200,
        message: "User is successfully created",
        data:user
    };
    res.send(response);
});

// CRUD API => Read
app.get('/user', (req, res) => {

    //Fetch Data from Database
    let sampleDataFromDatabase = [
        {
            firstName: "Kiran",
            lastName: "Mulmi",
            email: "kiran.mulmi@gmail.com",
            phoe: "1234567890"
        },
        {
            firstName: "Suresh",
            lastName: "Shrestha",
            email: "suresh.shrestha@gmail.com",
            phoe: "12345340"
        }
    ];

    let response = {
        success: true,
        message: "List of users",
        data: sampleDataFromDatabase
    };

    res.send(response)

});

// CRUD API UPDATE PART-1
app.get('/user/:id', (req, res) => {

    let id = req.params.id;

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


// CRUD API UPDATE PART-2
app.post('/user/update/:id', (req, res) => {

    let id = req.params.id;

    let myFirstname = req.body.firstName;
    let myLastname = req.body.lastName;
    let myEmail = req.body.email;

    let user = {
        _id: id,
        firstname: myFirstname,
        lastname: myLastname,
        email: myEmail
    };

    //Database update code begins


    let response = {
        success: true,
        status: 200,
        message: "User is successfully updated",
        data: user
    };
    res.send(response);
});

// CRUD API => Delete
app.delete('/user/delete/:id', (req, res) => {

    //Fetch Data from Database

    let id = req.params.id;
    
    //Database relate stuff begin

    let response = {
        success: true,
        status: 200,
        message: "User is successfully deleted",
        data:[]
    };
    res.send(response);

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