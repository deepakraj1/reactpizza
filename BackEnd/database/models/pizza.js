const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    id: {
        type: Number,
        minlength: 1,
    },
    type: {
        type: String,
        minlength: 1,
    },
    price: {
        type: Number,
        minlength: 1,
    },
    name: {
        type: String,
        minlength: 1,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    ingredients: {
        type: Array,
    },
    topping: {
        type: Array,
    },
});

const Pizza = mongoose.model('Pizza', PizzaSchema)

module.exports = Pizza;