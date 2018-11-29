const express = require("express");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const passport = require("passport");

const swaggerDocument = require("../../config/swagger.json");
const configureJWTStrategy = require("./passport-jwt");

const setGlobalMiddleware = app => {
  app.use(express.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(logger("dev"));
  app.use(passport.initialize({ userProperty: "currentUser" }));
  configureJWTStrategy();
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true
    })
  );
};

module.exports = setGlobalMiddleware;