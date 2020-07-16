const path = require('path');
const { ProductModel } = require(path.join(path.dirname(__dirname) + '/models', 'productModel.js'));

const productService = {
    get: async (req, res) => {
        try {
            const product = await ProductModel.findOne({ _id: req.params.id });
            return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid product ID'
            });
        }
    },
    put: async (req, res) => {
        try {
            const info = await ProductModel.updateOne({ _id: req.params.id }, req.body, {
                new: true,
                runValidators: true
            });
            return res.status(200).json(info);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Error updating',
                error
            });
        }
    },
    delete: async (req, res) => {
        try {
            const info = await ProductModel.deleteOne({ _id: req.params.id });
            return res.status(200).json(info);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Error deleting',
                error
            });
        }
    }
};

module.exports = {
    productService: productService
};
