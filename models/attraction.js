const mongoose = require('mongoose');

const AttractionSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Attraction = mongoose.model('Attraction', AttractionSchema);

module.exports = Attraction;
