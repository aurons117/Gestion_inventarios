const path = require('path');
const { SaleModel } = require(path.join(path.dirname(__dirname) + '/models', 'saleModel.js'));

const saleService = {
    get: async (req, res) => {
        try {
            const sale = await SaleModel.findOne({ _id: req.params.id });
            return res.status(200).json(sale);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid sale ID'
            });
        }
    },
    put: async (req, res) => {
        try {
            const info = await SaleModel.updateOne({ _id: req.params.id }, req.body, {
                new: true,
                runValidators: true
            });
            return res.status(200).json(info);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Error updating'
            });
        }
    },
    delete: async (req, res) => {
        try {
            const info = await SaleModel.deleteOne({ _id: req.params.id });
            return res.status(200).json(info);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Error deleting'
            });
        }
    }
};

module.exports = {
    saleService: saleService
};
