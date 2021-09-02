//This file is a 'middleware' for validate the token

//Import jsonwebtoken package
const jwt = require('jsonwebtoken');

//Import the secret configuration
const config = require('./config');

async function verifyToken(req, res, next) {

    //Recive the token from the request header
    const token = req.headers['x-access-token'];

    //If the token doesn't exist return an error
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided' });
    }

    //Verify the token
    await jwt.verify(token, config.secret, async (error, decoded) => {
        //If the token is invalid return an error
        if(error){
            return res.status(404).send('The token is incorrect');
        };     

        //Show
        console.log('decoded: ', decoded);  
        
        //Asign the 'id' of 'decoded' to request 'req'
        //with 'req.userId' we can access the 'id' from outside
        req.userId = decoded.id;

        //
        next();

    });  
}

//Export the module
module.exports = verifyToken;