const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema ({
    ref: String,
    price: Number,
    description: String,
    isAvalaible: Boolean
})

module.exports = mongoose.model('Product', product); //exportamos el modelo Producto con su esquema definido anteriormente.
