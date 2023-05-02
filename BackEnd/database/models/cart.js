const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
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
    quantity: {
        type: Number,
        default:1,
    },
});

const CartItem = mongoose.model('Cart', CartSchema)

module.exports = CartItem;