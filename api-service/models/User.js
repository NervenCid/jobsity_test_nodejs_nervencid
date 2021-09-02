//Creamos un modelo de usuario

//Importamos modulos de 'mongoose'
const {Schema, model} = require('mongoose');

//Importamos 'bcryptjs' para cifrar los password
const bcrypt = require('bcryptjs');

//Creamos un 'Schema' de los datos
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    token: String
});

//Extendemos el 'userSchema' para cifrarlo
userSchema.methods.encryptPassword = async (password) => {

    //Aplicamos el algoritmo de cifrado 10 veces
    const salt = await bcrypt.genSalt(10);

    //Convertimos el 'password' a un string cifrado
    return bcrypt.hash(password, salt);    
    
};

//Extendemos el 'userSchema' para descifrar el 'password'
//Usamos una 'function' y no una flecha porque necesitamos el 'this'
//que apunte al 'userSchema'
userSchema.methods.validatePassword = function (password) {
    //Comparamos los 'password'
    //Esto nos devuelve un 'true' o 'false'
    return bcrypt.compare(password, this.password);
}

//Creamos un modelo y lo exportamos
module.exports = model('User', userSchema);