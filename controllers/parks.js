const express = require('express');
const parkRouter = express.Router();
const Park = require('../models/park');

// Index
parkRouter.get('/', async(req, res) => {
    try {
        res.json(await Park.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete
parkRouter.delete('/:id', async(req, res) => {
    try {
        res.json(await Park.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update
parkRouter.put('/:id', async(req, res) => {
    try {
        res.json(
            await Park.findByIdAndUpdate(req.params.id, req.body, {new:true})
        ); 
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
parkRouter.post('/', async(req, res) => {
    try {
        res.json(await Park.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = parkRouter;