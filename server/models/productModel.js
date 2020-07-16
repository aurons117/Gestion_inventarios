const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, 'Proporcionar número de parte'],
    },
    description: {
        type: String,
        required: [true, 'Proporcionar descripción']
    },
    supplier: {
        type: String,
        required: [true, 'Proporcionar proveedor'],
    },
    cost: {
        type: Number,
        required: [true, 'Proporcionar costo de proveedor'],
        min: 0
    },
    price: {
        type: Number,
        required: false,
        default: 0
    },
    stock: {
        type: Number,
        required: [true, 'Proporcionar cantidad en stock'],
        min: 0
    }
});

productSchema.pre('save', function (next) {
    if (this.price < (this.cost / 0.9)) {
        this.price = this.cost / 0.9;
    }

    next();
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = {
    ProductModel: ProductModel
};
