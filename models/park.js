const mongoose = require('mongoose');

const ParkSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Park = mongoose.model('Park', ParkSchema);

module.exports = Park;
