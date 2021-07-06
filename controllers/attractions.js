const express = require('express');
const attractionRouter = express.Router();
const Attraction = require('../models/attraction');

// Index
attractionRouter.get('/', async(req, res) => {
    try {
        res.json(await Attraction.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete
attractionRouter.delete('/:id', async(req, res) => {
    try {
        res.json(await Attraction.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update
attractionRouter.put('/:id', async(req, res) => {
    try {
        res.json(
            await Attraction.findByIdAndUpdate(req.params.id, req.body, {new:true})
        ); 
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
attractionRouter.post('/', async(req, res) => {
    try {
        res.json(await Attraction.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = attractionRouter;