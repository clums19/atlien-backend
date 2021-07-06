const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
