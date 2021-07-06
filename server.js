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
app.use('/foods', require('./controllers/foods'));
app.use('/bars', require('./controllers/bars'));


// Routes
// ----------------------------------
// Test
app.get('/', (req, res) => {
    res.send('ATLien')
});

// Index
// ------------------------------------


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

// Delete
// ------------------------------------------


app.delete('/clubs/:id', async(req, res) => {
    try {
        res.json(await Club.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.delete('/parks/:id', async(req, res) => {
    try {
        res.json(await Park.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});
app.delete('/attractions/:id', async(req, res) => {
    try {
        res.json(await Attraction.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update
// ------------------------------------------


app.put('/clubs/:id', async(req, res) => {
    try {
        res.json(
            await Club.findByIdAndUpdate(req.params.id, req.body, {new:true})
        ); 
    } catch (error) {
        res.status(400).json(error);
    }
});
app.put('/parks/:id', async(req, res) => {
    try {
        res.json(
            await Park.findByIdAndUpdate(req.params.id, req.body, {new:true})
        ); 
    } catch (error) {
        res.status(400).json(error);
    }
});
app.put('/attractions/:id', async(req, res) => {
    try {
        res.json(
            await Attraction.findByIdAndUpdate(req.params.id, req.body, {new:true})
        ); 
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
// ------------------------------------------


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