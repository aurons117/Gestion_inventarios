const path = require('path');
const { SaleModel } = require(path.join(path.dirname(__dirname) + '/models', 'saleModel.js'));

salesService = {
    get: async (req, res) => {
        try {
            const sales = await SaleModel.find();
            return res.status(200).json(sales);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Error retrieving sales from database'
            });
        }
    },
    post: async (req, res) => {
        const sale = new SaleModel({
            product: req.body.product,
            quantity: req.body.quantity,
            unitaryPrice: req.body.unitaryPrice,
            saleDate: req.body.saleDate,
            client: req.body.client,
            seller: req.body.seller,
        });

        let doc;
        try {
            doc = await sale.save();
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
    salesService: salesService
};
