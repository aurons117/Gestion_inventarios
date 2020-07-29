const supplierModel = require('../models/supplierModel');

const supplierService = {
    get: async (req, res) => {
        try {
            const supplier = await SupplierModel.findOne({ _id: req.params.id });
            return res.status(200).json(supplier);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid supplier ID'
            });
        }
    },
    put: async (req, res) => {
        try {
            const info = await SupplierModel.updateOne({ _id: req.params.id }, req.body, {
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
            const info = await SupplierModel.deleteOne({ _id: req.params.id });
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
    supplierService: supplierService
};
