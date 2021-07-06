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
app.use('/clubs', require('./controllers/clubs'));
app.use('/parks', require('./controllers/parks'));
app.use('/attractions', require('./controllers/attractions'));


// Routes
// ----------------------------------
app.get('/', (req, res) => {
    res.send('ATLien')
});


// Listener
// ------------------------------------
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));