const express = require('express');
const clubRouter = express.Router();
const Club = require('../models/club');

// Index
clubRouter.get('/', async(req, res) => {
    try {
        res.json(await Club.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete
clubRouter.delete('/:id', async(req, res) => {
    try {
        res.json(await Club.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update
clubRouter.put('/:id', async(req, res) => {
    try {
        res.json(
            await Club.findByIdAndUpdate(req.params.id, req.body, {new:true})
        ); 
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
clubRouter.post('/', async(req, res) => {
    try {
        res.json(await Club.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = clubRouter;