const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Club = mongoose.model('Club', ClubSchema);

module.exports = Club;
