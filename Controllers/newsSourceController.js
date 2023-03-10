const express = require('express');
const router = express.Router();
const newsSource = require('../Models/newsSourceModel');


//Post to create a newsSource
router.post('/newsSource', (req, res) => {

    const source = new newsSource.model(req.body);
    source.save((error) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(201).json({
            _id: source._id,
            rssUrl: source.rssUrl,
            name: source.name,
            category: source.category
        });
    });
});



//Get all newsSource 
router.get('/newsSource', (req, res) => {
    newsSource.model.find({}, (error, source) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(200).json(source);
    });
});

//Get one newsSource by id
router.get('/newsSource/:id', (req, res) => {
    newsSource.model.findById(req.params.id, (error, source) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (!source) {
            return res.status(404).send('newsSource not found');
        }
        res.status(200).json({
            _id: source._id,
            rssUrl: source.rssUrl,
            name: source.name,
            category: source.category
        });
    });
});


//update newsSource information
router.put('/newsSource/:id', (req, res) => {
    newsSource.model.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, source) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (!source) {
            return res.status(404).send('newsSource not found');
        }
        res.status(200).json({
            _id: source._id,
            rssUrl: source.rssUrl,
            name: source.name,
            category: source.category
        });
    });
});

//delete newsSource
router.delete('/newsSource/:id', (req, res) => {
    newsSource.model.findByIdAndRemove(req.params.id, (error, source) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (!source) {
            return res.status(404).send('newsSource not found');
        }
        res.status(200).send('newsSource deleted successfully');
    });
});


module.exports = router;