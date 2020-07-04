const path = require('path');
const mongoose = require('mongoose');
const { ClientModel } = require(path.join(path.dirname(__dirname) + '/models', 'clientModel.js'));

clientsService = {
    get: (req, res) => {
        let list = ["item1", "item2", "item3"];
        return (res.json(list));
    },
    post: async (req, res) => {
        const cliente = new ClientModel({
            nombre: req.body.nombre,
            rfc: req.body.rfc,
            telefono: req.body.telefono,
            email: req.body.email,
            credito: req.body.credito,
            deudaActual: req.body.deudaActual,
        });
        
        try {
            const doc = await cliente.save();
            console.log(doc);
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid data sent'
            });
        }

        return res.send('Success creating document on database');
    }
};

module.exports = {
    clientsService: clientsService
};
