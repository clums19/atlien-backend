// Dependecies
// ---------------------------------
require('dotenv').config();

const { PORT = 4000, MONGODB_URL} = process.env;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

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


// Routes
// ----------------------------------
app.get('/', (req, res) => {
    res.send('ATLien')
});

// Listener
// ------------------------------------
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));