const express = require('express');
const mongoose = require('mongoose');

const router = require('./config/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/invoice-builder');

// Terminal : mongod

const app = express();
const PORT = 3000;

app.use('/api', router);

//Create custom middleware in Express
// app.use((req, res, next) =>{
//     console.log('Time: %d', Date.now());
//     next();
// })


app.get('/', (req , res) =>{
    res.json({
        msg: 'Welcome to Invoice builder backend',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
