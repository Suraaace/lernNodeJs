const express = require("express");
const routes = express.Router();


let Product = require('./product.model');

routes.route('/create').post((req,res) => {
    let obj = {
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category
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

routes.route('/').get( async (req, res) => { 
    let dataCount = await Product.countDocuments(); // awaits stops the threads untill this line executes.
        
    let limit = parseInt(req.query.limit);
    let offset = parseInt(req.query.offset);
    
    let product = await Product.find()
        .populate('category')
        .skip(offset)
        .limit(limit);

        let response={
            success : true,
            message : "List of Products.",
            data : product,
            count : dataCount
        };
        res.status(200).json(response);
   // })
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

        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        product.category = req.body.category;

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