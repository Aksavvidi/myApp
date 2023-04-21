const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator')


const Schema = mongoose.Schema;

let productsSchema = new Schema({
    product: {
        type: String,
        max: 100,
        required: true,
        trim: true,
    },
    cost:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        max: 350,
    },
    quantity: {
        type: Number,
        required: true,
    },

},{
    collection: 'products',
    timestamps: true 
  });

// productsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Products', productsSchema);