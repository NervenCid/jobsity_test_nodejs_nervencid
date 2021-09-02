//Here we configure the database connection

//Import the mongoose module
const mongoose = require('mongoose');

//Local connection
/*
mongoose.connect('mongodb://localhost/jobsity')
    .then(db=>console.log('La base de datos esta conectada'))
    .catch(err=>console.error(err));*/

//Docker connection
mongoose.connect('mongodb://db/jobsity')
    .then(db=>console.log('La base de datos esta conectada'))
    .catch(err=>console.error(err));

