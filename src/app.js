const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const config = require('./config/dev');
const bodyParser = require('body-parser');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
const restRouter  = require('./api');

mongoose.connect(config.DB_URI);

// Terminal : mongod

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(cors());
app.use(logger('dev'));
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
        explorer: true,
    })
);

app.use('/api', restRouter );
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 400;
    error.message = 'Invalid route';
    next(error);
});

app.use((req, res, next) => {
    res.status(error.status || 500);
    return res.json({ error: { message: error.message } });
});

//Create custom middleware in Express
// app.use((req, res, next) =>{
//     console.log('Time: %d', Date.now());
//     next();
// })

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
