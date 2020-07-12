const path = require('path');
const { ClientModel } = require(path.join(path.dirname(__dirname) + '/models', 'clientModel.js'));

clientsService = {
    get: async (req, res) => {
        try {
            const clients = await ClientModel.find();
            return res.status(200).json(clients);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Error retrieving clients from database'
            });
        }
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

        return res.status(200).send('Success creating document on database');
    }
};

module.exports = {
    clientsService: clientsService
};
