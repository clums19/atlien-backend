// Dependecies
// ---------------------------------
require('dotenv').config();

const { PORT = 4000, MONGODB_URL} = process.env;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

// Database Connection
// ----------------------------------
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// Models
// ----------------------------------
const FoodSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Food = mongoose.model('Food', FoodSchema);

const BarSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Bar = mongoose.model('Bar', BarSchema);

const ClubSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Club = mongoose.model('Club', ClubSchema);

const ParkSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Park = mongoose.model('Park', ParkSchema);

const AttractionSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    distance: String,
    web: String,
    category: String,

})
const Attraction = mongoose.model('Attraction', AttractionSchema);

mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));


// Middleware 
// ----------------------------------
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
// ----------------------------------
// Test
app.get('/', (req, res) => {
    res.send('ATLien')
});

// Index
// ------------------------------------
app.get('/food', async(req, res) => {
    try {
        res.json(await Food.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.get('/bars', async(req, res) => {
    try {
        res.json(await Bar.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.get('/clubs', async(req, res) => {
    try {
        res.json(await Club.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.get('/parks', async(req, res) => {
    try {
        res.json(await Park.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.get('/attractions', async(req, res) => {
    try {
        res.json(await Attraction.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
// ------------------------------------------
app.post('/food', async(req, res) => {
    try {
        res.json(await Food.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.post('/bars', async(req, res) => {
    try {
        res.json(await Bar.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.post('/clubs', async(req, res) => {
    try {
        res.json(await Club.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.post('/parks', async(req, res) => {
    try {
        res.json(await Park.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.post('/attractions', async(req, res) => {
    try {
        res.json(await Attraction.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Listener
// ------------------------------------
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));