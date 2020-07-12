const express = require("express");
const path = require('path');
const { clientsService } = require('./services/clientsService');
const { clientService } = require('./services/clientService');
const { authService } = require('./services/authService');

const router = express.Router();

function appRouter() {
    // Rutas de las API controladas desde express

    // API de clientes
    router.route('/api/clients')
        .get(clientsService.get)
        .post(clientsService.post);

    router.route('/api/clients/:id')
        .get(clientService.get)
        .put(clientService.put)
        .delete(clientService.delete);

    // Ruta para registrar nuevos usuarios, regresa un objeto con un token
    router.route('/api/signUp')
        .post(authService.signUp);

    // Ruta para loggear usuarios ya registrados, regresa un objeto con un token
    router.route('/api/login')
        .post(authService.login);

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
