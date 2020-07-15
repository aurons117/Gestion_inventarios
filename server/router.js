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
        // Se requiere token en la cookie y rol de admin para acceder a estos endpoints
        .get(authService.protect, authService.restrictTo('admin'), clientsService.get)
        .post(authService.protect, authService.restrictTo('admin'), clientsService.post);

    router.route('/api/clients/:id')
        // Un cliente puede ver su información, pero solo el admin modificarla y borrarla
        .get(authService.protect, clientService.get)
        .put(authService.protect, authService.restrictTo('admin'), clientService.put)
        .delete(authService.protect, authService.restrictTo('admin'), clientService.delete);

    // Registrar nuevos usuarios, regresa un objeto y el token en la cookie
    router.route('/api/signUp')
        .post(authService.signUp);

    // Loggear usuarios ya registrados, regresa un objeto y el token en la cookie
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
