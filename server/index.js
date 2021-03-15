// import express from 'express';
const express = require('express')
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser');
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// import cors from 'cors';
const cors = require('cors');

// import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ 
    limit: '30mb', 
    extended: true 
}));
app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true
}));
app.use(cors());

// app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://GabiLanB:GabiLanB@cluster0.nom9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

