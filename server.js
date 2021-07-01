// Dependecies
// ---------------------------------
require('dotenv').config();

const { PORT = 4000} = process.env;
const express = require('express');
const app = express();

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