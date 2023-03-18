const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./Controllers/userController');
const newsSourceRoutes = require('./Controllers/newsSourceController');
const newsRoutes = require('./Controllers/newsController');
const categoryRoutes = require('./Controllers/categoryController');
const loginRoutes = require('./Controllers/loginController');


const { dbConnect } = require('./configMongo');

const bodyParse = require("body-parser");

const app = express();
dbConnect();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParse.json());
app.use('/api', userRoutes);
app.use('/api', newsSourceRoutes);
app.use('/api', newsRoutes);
app.use('/api', categoryRoutes);
app.use('/api', loginRoutes);



app.listen(port, () => console.log("News Cover app listening on port " + port +"!!" ))