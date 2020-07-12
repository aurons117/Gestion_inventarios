const jwt = require('jsonwebtoken');
const path = require('path');
const { UserModel } = require(path.join(path.dirname(__dirname) + '/models', 'userModel.js'));

const createToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const authService = {
    // Registrar usuario y regresar objeto con token
    signUp: async (req, res) => {
        try {
            const user = await UserModel.create({
                name: req.body.name,
                email: req.body.email,
                photo: req.body.photo,
                password: req.body.password,
                passwordConfirmation: req.body.passwordConfirmation
            });

            const token = createToken(user._id);

            return res.status(201).json({
                status: 'Success',
                message: 'User created',
                token,          // El token debe ser guardado por el cliente en una cookie o localstorage
                user
            });
        } catch (error) {
            return res.status(400).json({
                status: 'Fail',
                message: 'Invalid data sent',
                data: error.message
            });
        }
    },
    // Autenticar usuario y regresar objeto con token
    login: async (req, res) => {
        const { email, password } = req.body;

        // Validar si se recibe usuario y contraseña
        if (!email || !password) {
            return res.status(400).json({
                status: 'Fail',
                message: 'Favor de proporcionar mail y contraseña'
            });
        }
        // Validar si existe el usuario y si su contraseña es correcta
        const user = await UserModel.findOne({ email }).select('+password');    // Buscar mail en base de datos
        const passValidation = await user.correctPassword(password, user.password);     // Validar password

        if (user === null || !passValidation) {
            return res.status(400).json({
                status: 'Fail',
                message: 'Usuario o contraseña incorrectos'
            });
        }

        // Regresar token al cliente si se valida la autenticación

        const token = createToken(user._id);

        return res.status(200).json({
            status: 'Success',
            message: 'User logged',
            token          // El token debe ser guardado por el cliente en una cookie o localstorage
        });
    }
};

module.exports = {
    authService: authService
};
