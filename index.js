const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Controllers/userController');
const newsSourceRoutes = require('./Controllers/newsSourceController');
const newsRoutes = require('./Controllers/newsController');

const bodyParse = require("body-parser");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/newscover").then(() => console.log("Connected to MongoDB"));
const port = process.env.PORT || 3000;

app.use(bodyParse.json());
app.use('/api', userRoutes);
app.use('/api', newsSourceRoutes);
app.use('/api', newsRoutes);



app.listen(port, () => console.log("News Cover app listening on port 3000!!"))