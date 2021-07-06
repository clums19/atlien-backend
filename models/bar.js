const mongoose = require('mongoose');

const BarSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Bar = mongoose.model('Bar', BarSchema);

module.exports = Bar;
