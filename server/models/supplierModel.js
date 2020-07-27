const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    razonSocial: {
        type: String,
        required: [true, 'Proporcionar razon social'],
    },
    rfc: {
        type: String,
        required: [true, 'Proporcionar RFC']
    },
    domicilio: {
        type: String,
        required: [true, 'Proporcionar domicilio']
    },
    telefono: {
        type: String,
        required: [true, 'Proporcionar telefono']
    },
    emailContacto: {
        type: String,
        required: [true, 'Proporcionar email de contacto']
    },
});

const SupplierModel = mongoose.model('Supplier', supplierSchema);

module.exports = {
    SupplierModel: SupplierModel
};
