const express = require('express');
// const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
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

// Limitador de requests a la API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Demasiados request desde esta IP, intentar en una hora'
});
app.use('/api', limiter);

// Parsers de body y cookies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(cors());

// Data Sanitizers
app.use(mongoSanitize());       // Prevents NoSQL injections
app.use(xss());         // Prevents html and JS injection

// Serve the static files from the React app
app.use(express.static(path.join(path.dirname(__dirname), 'client/build')));


app.use(appRouter());

const server = app.listen(port, () => {
    console.log(`Listening on http://localhost:${port} 🚀`);
});
