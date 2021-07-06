const express = require('express');
const foodRouter = express.Router();
const Food = require('../models/food')

// Index
foodRouter.get('/', async(req, res) => {
    try {
        res.json(await Food.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete
foodRouter.delete('//:id', async(req, res) => {
    try {
        res.json(await Food.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update 
foodRouter.put('//:id', async(req, res) => {
    try {
        res.json(
            await Food.findByIdAndUpdate(req.params.id, req.body, {new:true})
        ); 
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
foodRouter.post('/', async(req, res) => {
    try {
        res.json(await Food.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});



module.exports = foodRouter;