const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id: {
        type: Number,
        minlength: 1,
    },
    tname: {
        type: String,
        minlength: 1,
    },
    price: {
        type: Number,
        minlength: 1,
    },
    image: {
        type: String,
    },
});

const List = mongoose.model('custom', ItemSchema);

module.exports = List;