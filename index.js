var express = require('express');
var es6Renderer = require('express-es6-template-engine');
var bodyParser = require('body-parser')

var app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');


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