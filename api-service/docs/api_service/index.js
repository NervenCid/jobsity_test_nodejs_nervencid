const signUp = require('./signUp');
const signIn = require('./signIn');
const main = require('./main');
const stock = require('./getStock');
const history = require('./history');

module.exports = {
    paths:{
        '/signup':{
            ...signUp
        },
        '/signin':{
            ...signIn
        },
        '/':{
            ...main
        },
        '/sotck?q={symbol}': {
            ...stock
        },
        '/history': {
            ...history
        }
    }
}