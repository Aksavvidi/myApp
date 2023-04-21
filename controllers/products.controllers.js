// const {update} = require('../models/products.models');
const Product = require('../models/products.models');

const logger = require('../logger/logger');

exports.findAll = function(req, res) {
    console.log('Find All products');

    Product.find({}, (err, results) => {
        if(err) {
            res.status(400).json({status: false, data: err});
            logger.error("Error in reading products", err);
            console.log('Problem in reading product', err);
        }else{
            res.status(200).json({status: true, data: results});
            console.log('Success in reading product');
            logger.info("Success in reading all products");
            logger.warn("Warn in reading all products");
            logger.error("Error in reading products");
            logger.debug("Debug in reading all products");
        }
    });
};

exports.findOne = function(req, res) {
 
    const id = req.params.id;

    console.log('Find product ith id: ', id);

    Product.findOne({_id: id}, (err, results) => {
        if(err) {
            res.status(400).json({status: false, data: err});
            console.log(`Problem in finding product with id: ${id}`, err)
        }else {
            res.status(200).json({status: true, data: results});
            console.log('Success in finding product with id: ', id);
        }
    });

}
exports.create = function(req, res) {

    const newProduct = new Product({
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    });

console.log('Insert product ', req.body.product);

newProduct.save((err, result) => {
    if(err) {
        res.status(400).json({status: false, data: err});
        console.log(`Problem in creating new product`, err) 
    }else {
        res.status(200).json({status: true, data: result});
        console.log('Success in creating new product');
    }
});
}

exports.update = function (req, res) {
    const id = req.body.id;

    const updateProduct = {
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    };

    Product.findOneAndUpdate({_id: id}, updateProduct,{new: true}, (err, result)=> {
        if(err) {
            res.status(400).json({status: false, data: err});
            console.log(`Problem in updating product`, err) 
        }else {
            res.status(200).json({status: true, data: result});
            console.log('Success in updating product');
        }
    });
};

exports.delete = function(req,res) {
    const id = req.params.id;
    console.log('Delete product with id', id);
    Product.deleteOne({_id: id},(err, result) => {
        if(err) {
            res.status(400).json({status: false, data: err});
            console.log(`Problem in deleting product`, err) 
        }else {
            res.status(200).json({status: true, data: result});
            console.log('Success in deleting product');
        }
    } );
};