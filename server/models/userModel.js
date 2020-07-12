const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Favor de proporcionar un nombre correcto'],
    },
    email: {
        type: String,
        required: [true, 'Favor de proporcionar un mail correcto'],
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Favor de proporcionar un mail correcto']
    },
    photo: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: [true, 'Favor de proporcionar un password correcto'],
        minlength: 8,
        select: false       // Al hacer una búsqueda, esta opción bloquea el que regrese la contraseña del usuario
    },
    passwordConfirmation: {
        type: String,
        required: [true, 'Favor de confirmar el password'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Los password no coinciden'
        }
    }
});

// Encriptar el password despues de recibirlo pero antes de guardarlo
userSchema.pre('save', async function (next) {
    // Corroboramos que se ejecute el middleware solo cuando se edite el password
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirmation = undefined;

    next();
});

// Creamos método personalizado del modelo para validar si la contraseña es correcta
userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
};

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel: UserModel
};
