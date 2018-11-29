const express = require('express');
const mongoose = require('mongoose');

const devConfig  = require('./config/env/development');
const setGlobalMiddleware = require('./api/middlewares/global-middleware');

const restRouter  = require('./api');

mongoose.connect(devConfig.DB_URI);

// Terminal : mongod

const app = express();
const PORT = devConfig.port;

// register global middleware
setGlobalMiddleware(app);

app.use('/api', restRouter );

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.message = 'Invalid route';
    error.status = 404;
    next(error);
  });
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });

//Create custom middleware in Express
// app.use((req, res, next) =>{
//     console.log('Time: %d', Date.now());
//     next();
// })

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
