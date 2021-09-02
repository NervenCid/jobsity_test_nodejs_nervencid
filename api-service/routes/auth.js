//Importamos el modulo 'router' de 'express'
const{ Router }=require('express');

//Import the module for webtokens
const jwt = require('jsonwebtoken');

//Create a new router
const router = Router();

//Import the model
const User = require('../models/User');

//Import the configuration of the secret
const config =require('../config');

//Import the 'middleware' 'verifyToken'
const verifyToken = require('../verifyToken');

//-----------------------------ROUTES-----------------------------------

//Create a new user
router.post('/signup', async(req, res, next) =>{
    
    //Receive the data from the body
    const { username, email, password}=req.body;

    //Verify if the user already exist
    const verifyUser = await User.findOne({email: email});
    if(verifyUser){
        return res.status(404).send("The user already exist");
    }

    //Create a new 'user'
    const user = new User({
        username: username,
        email: email,
        password: password,
        token: ''
    });
    
    console.log(user);

    //Crypt the 'password'
    user.password = await user.encryptPassword(user.password);

    //Save into the database
    await user.save();

    //Create a 'token'
    const token = jwt.sign({id: user._id},
        config.secret,
        {expiresIn: 60*60*24}
    );

    //Search by 'id' and save the 'token' into the database
    await User.findByIdAndUpdate(user.id, { token });
    
    //Change the 'token' parameter in the user
    user.token=token;
    //Monstamos en consola
    console.log(`new user: ${user}`);

    //Send the response   
    res.json({message: 'Nuevo usuario recibido',
        auth: true,
        token: token});
});

//Route for sign in
router.post('/signin', async (req, res, next) =>{

    //Receive the data from the client
    const {email, password}=req.body;

    //Search the 'email' in the database
    //If it doesn't exist, return an error
    const user = await User.findOne({email: email});
    if(!user){
        return res.status(404).send("El email no esta registrado");
    }

    //Validate the 'password'
    passwordIsValid = await user.validatePassword(password);

    //Show in console
    console.log(`passwordIsValid?: ${passwordIsValid}`);

    //If the password is not valid, return an error
    if(!passwordIsValid){
        return res.status(404).json({
            auth: false, 
            message: "El password no es correcto"
        });
    }

    //Create a session token
    const sessionToken = jwt.sign({id: user._id},
        config.secret,
        {expiresIn: 60*60*24}
    );
    
    //Send response to the client
    res.json({auth: true,
        'message': 'Acceso concedido al usuario',
        'user: ': user,
        'Token de sesion': sessionToken
    });

});

//Route of user profile
router.get('/me', verifyToken, async (req, res, next) =>{
    
    //Get the user from mongoDB
    const user = await User.findById(req.userId, { password: 0});
    
    //If the user doesn't exist return an error
    if(!user){
        return res.status(404).json({
            auth: false, 
            message: "Access Denied"
        });
    }

    //Return the user
    res.json({auth: true,
        'message': 'Access Granted',
        'user: ': user
    });
    
});

//---------------------------------------------------------------------

//Export the module
module.exports = router