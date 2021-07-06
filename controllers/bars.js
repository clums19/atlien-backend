const express = require('express');
const barRouter = express.Router();
const Bar = require('../models/bar');

// Index
barRouter.get('/', async(req, res) => {
    try {
        res.json(await Bar.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete
barRouter.delete('//:id', async(req, res) => {
    try {
        res.json(await Bar.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update
barRouter.put('//:id', async(req, res) => {
    try {
        res.json(
            await Bar.findByIdAndUpdate(req.params.id, req.body, {new:true})
        ); 
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
barRouter.post('/', async(req, res) => {
    try {
        res.json(await Bar.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = barRouter;