const path = require('path');
const { ProductModel } = require(path.join(path.dirname(__dirname) + '/models', 'productModel.js'));

productsService = {
    get: async (req, res) => {
        try {
            const products = await ProductModel.find();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Error retrieving products from database'
            });
        }
    },
    post: async (req, res) => {
        const product = new ProductModel({
            product: req.body.product,
            description: req.body.description,
            supplier: req.body.supplier,
            cost: req.body.cost,
            price: req.body.price,
            stock: req.body.stock,
        });

        let doc;
        try {
            doc = await product.save();
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
    productsService: productsService
};
