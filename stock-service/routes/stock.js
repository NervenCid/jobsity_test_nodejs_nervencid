//Import the module for webtokens
const jwt = require('jsonwebtoken');

//Import 'router' module from 'express'
const{ Router }=require('express');

//Create a router object
const router = Router();

//Import the 'middleware' 'verifyToken'
const verifyToken = require('../verifyToken');

//Import axios
const axios = require('axios');

//-----------------------------ROUTES-----------------------------------

/* GET home page. */
router.get('/stock', verifyToken, async function(req, res, next) {
    
    try {
        
        //Make the http request to inout API using axios
        const response = await axios(
            {                
                method: 'get',
                url: `https://stooq.com/q/l/?s=${req.body.symbol}&f=sd2t2ohlcvn&h&e=json`                
            });

        //Return the respones
        console.log("Success: ", response.data);
        res.json(response.data);
        
    } catch (error) {

        //In case of Error in the request
        console.log("Error: ", error);
        res.json({"Error:": error});
        
    }

});

module.exports = router;

//---------------------------------------------------------------------

//Export the module
module.exports = router