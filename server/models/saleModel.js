const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, 'Proporcionar producto'],
    },
    quantity: {
        type: Number,
        required: [true, 'Proporcionar cantidad del producto vendido']
    },
    unitaryPrice: {
        type: Number,
        required: true,
    },
    saleDate: {
        type: Date,
        default: Date.now()
    },
    client: {
        type: String,
        required: [true, 'Proporcionar cliente que realiza compra']
    },
    seller: {
        type: String,
        required: [true, 'Proporcionar nombre del vendedor']
    }
});

const SaleModel = mongoose.model('Sale', saleSchema);

module.exports = {
    SaleModel: SaleModel
};
