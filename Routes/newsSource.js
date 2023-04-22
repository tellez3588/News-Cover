const express = require('express');
const router = express.Router();
const {createNewSource, getAllNewsSource, getNewSourceById, updateNewSource, deleteNewSource} = require('../Controllers/newsSourceController')


//Create a new
router.post('/newsSource', createNewSource);

//get all news
router.get('/newsSource', getAllNewsSource);

//get new by ID
router.get('/newsSource/:id', getNewSourceById);

//update new
router.put('/newsSource/:id', updateNewSource);

//delete new
router.delete('/newsSource/:id', deleteNewSource);


module.exports = router