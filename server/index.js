const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { appRouter } = require('./router');

// Revisar .env
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Conexión a base de datos
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if (err) {
        throw "MongoDB couldn't be connected.";
    } else {
        console.log('sMongoDB connection successful...');
    }
});

// Inicia express
const port = process.env.PORT || 3000;
const app = express();

// Revisar para eliminar - Ya que no se renderea desde express, sino desde React, no se utiliza el body de los request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(path.dirname(__dirname), 'client/build')));

app.use(appRouter());

const server = app.listen(port, () => {
    console.log(`Listening on http://localhost:${port} 🚀`);
});
