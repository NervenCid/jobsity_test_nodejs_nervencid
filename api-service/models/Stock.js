//Importamos modulos de 'mongoose'
const {Schema, model} = require('mongoose');

//Creamos un 'Schema' de los datos
const stockSchema = new Schema({
    userEmail: String,
    date: String,
    time: String,
    symbol: String,
    open: String,
    high: String,
    low: String,
    close: String,
    volume: String,
    name: String
},{
    timestamps: true
});

//Creamos un modelo y lo exportamos
module.exports = model('Stock', stockSchema);