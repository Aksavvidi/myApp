const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let productsSchema = new Schema({
    product: {
        type: String,
        max: 100,
        unique: true,
        trim: true,
        lowercase: true
    },
    cost:{
        type: Number,
        max: 100,
    },
    description: {
        type: String,
        max: 150,
    },
    quantity: {
        type: Number,
        max: 100,
    },

},{
    collection: 'products',
    timestamps: true 
  });

productsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Products', productsSchema);