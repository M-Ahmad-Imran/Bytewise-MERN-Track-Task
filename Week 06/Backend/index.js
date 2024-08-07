const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require("./config/dp");
const Port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./rountes/goalroutes'));
app.use('/api/users', require('./rountes/userRoutes'));

app.use(errorHandler)

app.listen(Port, () => {
    console.log(`Server is started on port ${Port}`);
})