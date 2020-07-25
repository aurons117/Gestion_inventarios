const jwt = require('jsonwebtoken');
const path = require('path');
const { UserModel } = require(path.join(path.dirname(__dirname) + '/models', 'userModel.js'));

const createAndSendToken = (user, res) => {
    // creamos token utilizando el id del usuario
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    // Adjuntamos al response la cookie que va a guardar el token.
    const cookieOptions = {
        expires: new Date(Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)),
        httpOnly: true      // Solo se puede editar la cookie por nosotros
    };
    res.cookie('jwt', token, cookieOptions);

    // Borramos la contraseña antes de regresarla
    user.password = undefined;

    return res.status(201).json({
        status: 'Success',
        message: 'User logged'
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

            createAndSendToken(user, res);
        } catch (error) {
            return res.status(400).json({
                status: 'Fail',
                message: 'Invalid data sent',
                data: error.message
            });
        }
    },
    // Autenticar información del usuario en el req.body y regresar objeto con token
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
        let user;
        let passValidation
        try {
            user = await UserModel.findOne({ email }).select('+password');    // Buscar mail en base de datos
            passValidation = await user.correctPassword(password, user.password);     // Validar password
        } catch (error) {
            return res.status(400).json({
                status: 'Fail',
                message: 'Usuario o contraseña incorrectos'
            });
        }

        if (user === null || !passValidation) {
            return res.status(400).json({
                status: 'Fail',
                message: 'Usuario o contraseña incorrectos'
            });
        }

        // Regresar token al cliente si se valida la autenticación

        createAndSendToken(user, res);
    },
    logout: async (req, res, next) => {
        res.clearCookie('jwt');
        res.status(200).json({
            status: 'Success',
            message: 'Sesión terminada'
        });
    },
    // Utilizamos protect como middleware. En cada solicitud a la API, validamos que tenga token valido
    protect: async (req, res, next) => {
        // Obtener el token que por estandar se envía por el header { authorization: 'Bearer token' } o por cookie
        let token;
        // if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        //     token = req.headers.authorization.split(' ')[1];
        // } else {
        //     return next(res.status(400).json({
        //         status: 'Fail',
        //         meesage: 'No se recibió token'
        //     }));
        // }
        if (req.cookies.jwt) {
            token = req.cookies.jwt;
        } else {
            return next(res.status(400).json({
                status: 'Fail',
                meesage: 'No se recibió token'
            }));
        }

        // Verificar token obtenido
        let decoded;
        try {
            decoded = await jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return next(res.status(400).json({
                    status: 'Fail',
                    message: 'Token expirado'
                }));

            } else {
                return next(res.status(400).json({
                    status: 'Fail',
                    message: 'Token no válido'
                }));
            }
        }
        // Verificar que usuario existe
        const userValidation = await UserModel.findOne({ _id: decoded.id });
        if (!userValidation) {
            return next(res.status(400).json({
                status: 'Fail',
                message: 'Usuario eliminado'
            }));
        }

        // Guardar información del usuario en el request
        req.user = userValidation;

        return next();
    },
    // Reestringe el acceso a ciertos roles
    restrictTo: (...roles) => {
        return (req, res, next) => {
            if (!roles.includes(req.user.role)) {
                return next(res.status(403).json({
                    status: 'Fail',
                    message: 'No autorizado'
                }));
            }
            return next();
        }
    },
    validate: async (req, res, next) => {
        return res.status(200).json({
            status: 'Sucess',
            message: 'Validated'
        });
    }
};

module.exports = {
    authService: authService
};
