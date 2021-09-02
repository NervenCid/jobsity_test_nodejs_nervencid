//Importamos el modulo 'router' de 'express'
const{ Router }=require('express');

//Import the module for webtokens
const jwt = require('jsonwebtoken');

//Create a new router
const router = Router();

//Importing the model
const User = require('../models/User');
const Stock = require('../models/Stock');

//Import the secret configuration
const config =require('../config');

//Import the 'middleware' 'verifyToken'
const verifyToken = require('../verifyToken');

//Import axios
const axios = require('axios');

//-----------------------------ROUTES-----------------------------------

//Route for get the stocks
router.get('/sotck', verifyToken, async (req, res) =>{    

    //Get the user from mongoDB
    const user = await User.findById(req.userId, { password: 0});    

    try {

        //Make the http request to inout API using axios
        const response = await axios(
            {
                headers: { 
                    'x-access-token': req.headers['x-access-token']
                },
                method: 'get',
                //url: 'http://localhost:3002/stock', //Use this for localhost ONLY, NO Docker   
                url: 'http://stock-service:3002/stock', //Use this for docker
                data: {"symbol": req.query.q}             
            }
        );

        //Create a new 'stock'              
        const stock = new Stock({
            userEmail: user.email,
            symbol: response.data.symbols[0].symbol,
            date: response.data.symbols[0].date,
            time: response.data.symbols[0].time,
            open: response.data.symbols[0].open,
            high: response.data.symbols[0].high,
            low: response.data.symbols[0].low,
            close: response.data.symbols[0].close,
            volume: response.data.symbols[0].volume,
            name: response.data.symbols[0].name,
        });

        //Save into the database
        await stock.save();

        //Return the respones
        console.log("Success: ", response.data);
        res.json({"Success:": response.data});
        
    } catch (error) {

        //In case of Error in the request
        console.log("Error: ", error);
        res.json({"Error:": error});
        
    }
    
});

//Route for get the history
router.get('/history', verifyToken, async (req, res) =>{
    
    //Get the user from mongoDB
    const user = await User.findById(req.userId, { password: 0});    
        
    try {

        //Get all stocks from the database for the user email
        const stocks = await Stock.find({userEmail: user.email}).exec();

        //Return response
        console.log("History: ", stocks);
        res.json({"History:": stocks});

    } catch (error) {

        //In case of Error in the request
        console.log("Error: ", error);
        res.json({"Error:": error});
        
    }
}); 

//---------------------------------------------------------------------

//Export the module
module.exports = router