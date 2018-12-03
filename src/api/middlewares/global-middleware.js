const express = require("express");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

const devConfig = require("../../config/env/development");
const swaggerDocument = require("../../config/swagger.json");
const configureJWTStrategy = require("./passport-jwt");

const configureGoogleStrategy = require("./passport-google");
const configureTwitterStrategy = require("./passport-twitter");
const configureGithubStrategy = require("./passport-github");

const setGlobalMiddleware = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(logger('dev'));
  app.use(
    session({
      secret: devConfig.secret,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize({ userProperty: 'currentUser' }));
  app.use(passport.session());
  configureJWTStrategy();
  configureGoogleStrategy();
  configureTwitterStrategy();
  configureGithubStrategy();

  // save user into session
  // req.session.user = {userId}
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  // extract the userId from session
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true,
    })
  );
  app.get('/failure', (req, res) => res.redirect('http://localhost:4200/login'));
};

module.exports = setGlobalMiddleware;
