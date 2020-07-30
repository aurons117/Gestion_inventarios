const path = require('path');
const { SupplierModel } = require(path.join(path.dirname(__dirname) + '/models', 'supplierModel.js'));

suppliersService = {
    get: async (req, res) => {
        try {
            const suppliers = await SupplierModel.find();
            return res.status(200).json(suppliers);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Error retrieving suppliers from database'
            });
        }
    },
    post: async (req, res) => {
        const supplier = new SupplierModel({
            razonSocial: req.body.razonSocial,
            rfc: req.body.rfc,
            telefono: req.body.telefono,
            emailContacto: req.body.emailContacto,
            domicilio: req.body.domicilio,
        });

        let doc;
        try {
            doc = await supplier.save();
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid data sent',
                error
            });
        }

        return res.status(200).send({
            status: 'Success creating document on database',
            doc
        });
    }
};

module.exports = {
    suppliersService: suppliersService
};
