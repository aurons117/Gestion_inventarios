const express = require("express");
const path = require('path');
const { clientsService } = require('./services/clientsService');

const router = express.Router();

function appRouter() {

    // Rutas de las API controladas desde express
    router.route('/api/clients')
        .get(clientsService.get)
        .post(clientsService.post);

    // Rutas controladas por react router
    router.route('*')
        .get((req, res) => {
            res.sendFile(path.join(path.dirname(__dirname) + '/client/build/index.html'));
        });

    return router;
}

module.exports = {
    appRouter: appRouter
};
