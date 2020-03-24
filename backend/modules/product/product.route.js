const express = require("express");
const routes = express.Router();



let Product = require('./product.model');

routes.route('/create').post((req,res) => {
    let obj = {
        productName : req.body.productName,
        productColor : req.body.productColor,
        productSize : req.body.productSize
    }

    let product = new Product(obj);
    product.save().then((product) => {
        let response = {
            success : true,
            message : "Product is created successfully.",
            data : product
        };
        res.status(200).json(response);
    })
});

routes.route('/').get((req, res) => {
    Product.find({},(err, products)=>{
        if (err) return console.error(err);

        let response={
            success : true,
            message : "List of Products.",
            data : products
        };
        res.status(200).json(response);
    })
});

routes.route('/:id').get((req, res)=>{
    let id = req.params.id;

    Product.findById(id, (err, product) => {
        if (err) return console.error(err);

        let response ={
            succcess: true,
            message: "Product details",
            data: product
        };
        res.status(200).json(response);
    });

});


routes.route('/update/:id').post((req, res) => {
    
    let id = req.params.id;

    Product.findById(id, (err, product) => {
        if (err) return console.error(err);

        product.productName = req.body.productName;
        product.productColor = req.body.productColor;
        product.productSize = req.body.productSize;

        product.save().then((product) => {
            let response ={
                success : true,
                message : "Product updated.",
                data : product
            };
            res.status(200).json(response);
        });
    });

});

routes.route('/delete/:id').delete((req, res) =>{
    let id = req.params.id;

    Product.findByIdAndRemove({_id: id}, (err, product) =>{
        if (err) return console.error(err);

        let response={
            success: true,
            message: "Product deleted.",
            data: []
        };
        res.status(200).json(response);
    });
}); 

module.exports = routes;