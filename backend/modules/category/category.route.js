const express = require('express');
const routes = express.Router();

let Category = require('./category.model');

routes.route('/create').post((req,res) => {
    let obj ={
        name: req.body.name
    }

    let category = new Category(obj);

    category.save().then( (category) => {
        let response = {
            success: true,
            message: "Category is successfully created",
            data: category
        };
        res.status(200).json(response);
    });

});

routes.route('/').get((req, res)=> {
    Category.find({},(err, categories)=>{
        if(err) return console.error(err);

        let response ={
            success: true,
            message: "Category List",
            data: category
        };
        res.status(200).json(response);
    })
});

routes.route('/:id').get((req,res)=>{
    let id = params.id;
    Category.findById(id,(err, category) =>{
        if(err) return console.error(err);

        let response={
            success:true,
            message:"Category list",
            data: category
        };
        res.status(200).json(response);
    });
});

routes.route('/update/:id').post((req,res)=>{
    let id=req.params.id;
    
    Category.findById(id, (err, category)=>{
        category.name=req.body.name;
        
        category.save().then((category)=>{
            let response ={
                success: true,
                message: "Category Updated",
                data: category
            }
        });
    });
});

routes.route('/delete/:id').delete((req,res)=>{
    let id = req.params.id;

    Category.findByIdAndRemove({_id: id}, (err,category)=>{
        if (err) return console.error(err);

        let response={
            success: true,
            message: "Category Deleted.",
            data: []
        };
    });
});

module.exports = routes;
