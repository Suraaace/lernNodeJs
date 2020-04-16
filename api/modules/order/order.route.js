const express = require("express");
const routes = express.Router();

let Order = require('./order.model');

routes.route('/').get((req, res) => {

    let dataCount = await Order.countDocuments();

    let order = await Order.find();

    let response = {
         success: true,
         message: "Order Listing",
         data: order,
         count : dataCount          
    };
    res.status(200).json(response);
});

routes.route('/create').post((req, res) => {
    let obj ={
        productId: req.body.productId,
        userId: req.body.userId,
        status: req.body.status
    }

    let order = new Order(obj);

    order.save().then( (order) => {
        let response = {
            success: true,
            message: "Order successfully created.",
            data: order
        };
        res.status(200).json(response);
    })
});

routes.route('/update/:id').post((req, res) => {
    let id = req.params.id;
    
    Order.findById(id, (err, order) => {

        if(err) return console.error(err);
        
        order.productId = req.body.productId;
        order.userId = req.body.userId;
        order.status = req.body.status;

        order.save().then((order) =>{
          let response = {
            success: true,
            message: "Order is successfully updated.",
            data: order
          };
          res.status(200).json(response);
        });
    });
});

routes.route('/delete/:id').delete((req, res) => {
    
    let id = req.params.id;

    Order.findByIdAndRemove({_id: id}, (err, order) => {
        
        if (err) return console.error(err);

        let response = {
            success: true,
            message: "Order is successfully deleted",
            data: []
        };
        res.status(200).json(response);
    });
});


module.exports = routes;