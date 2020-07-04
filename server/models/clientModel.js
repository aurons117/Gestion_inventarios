const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    rfc: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    credito: {
        type: Number,
        required: true,
        default: 0
    },
    deudaActual: {
        type: Number,
        default: 0
    }
});

const ClientModel = mongoose.model('Client', clientSchema);     // El 1er parametro es el nombre que tendrá en la collection

module.exports = {
    ClientModel: ClientModel
};
