const path = require('path');
const { ClientModel } = require(path.join(path.dirname(__dirname) + '/models', 'clientModel.js'));

const clientService = {
    get: async (req, res) => {
        try {
            const client = await ClientModel.findOne({ _id: req.params.id });
            return res.status(200).json(client);
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid client ID'
            });
        }
    },
    put: async (req, res) => {
        try {
            const info = await ClientModel.updateOne({ _id: req.params.id }, req.body, {
                new: true,
                runValidators: true
            });
            return res.status(200).json(info);
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                status: 'fail',
                message: 'Error updating'
            });
        }
    },
    delete: async (req, res) => {
        try {
            const info = await ClientModel.deleteOne({ _id: req.params.id });
            return res.status(200).json(info);
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                status: 'fail',
                message: 'Error updating'
            });
        }
    }
};

module.exports = {
    clientService: clientService
};
