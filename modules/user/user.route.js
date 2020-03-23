const express = require('express');
const routes = express.Router();
var randomstring = require("randomstring");
let User = require('./user.model');

routes.route('/create').post((req, res) => {

    let obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    }

    let user = new User(obj);

    user.save().then( (user) => {
        let response = {
            success: true,
            message: "User is successfully created",
            data:user
        };
        res.status(200).json(response);
    })

});

routes.route('/').get((req, res) => {
    
    User.find({}, (err, abcs) => {
        
        if (err) return console.error(err);

        let response = {
            success: true,
            message: "Users Listing",
            data:abcs
        };
        res.status(200).json(response);

    });
});

routes.route('/:id').get((req, res) => {
    let id = req.params.id;

    User.findById(id, (err, user) => {
        if (err) return console.error(err);
        let response = {
            success: true,
            message: "User details",
            data: user
        };

        res.status(200).json(response);
    });
});

routes.route('/update/:id').post((req, res) => {
    let id = req.params.id;

    User.findById(id, (err, user) => {
        
        if (err) return console.error(err);

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.phone = req.body.phone;

        user.save().then( (user) => {
            let response = {
                success: true,
                message: "User is successfully updated",
                data:user
            };
            res.status(200).json(response);
        });

    });
});

routes.route('/delete/:id').delete((req, res) => {
    //Fetch Data from Database

    let id = req.params.id;
    
    User.findByIdAndRemove({_id: id}, (err, user) => {
        if (err) return console.error(err);

        let response = {
            success: true,
            message: "User is successfully deleted",
            data:[]
        };
        res.status(200).json(response);
    });

});

module.exports = routes;