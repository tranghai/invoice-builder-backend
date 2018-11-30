const devConfig = {
  port: 3000,
  database: "invoice-builder",
  secret: "AHSDEUIYEIUER",
  DB_URI: "mongodb://test:test123@ds117334.mlab.com:17334/invoice-builder",
  frontendURL: "http://localhost:4200",
  google: {
    clientId:
      "465245842718-3nsmafhgvs8563lkemjg8m8cl1l6adt0.apps.googleusercontent.com",
    clientSecret: "5AJVQ542hYGJ_xYQPVx2K7dR",
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  },
  twitter: {
    consumerKey: "dFRt0qpQ564CfsRj2Q8CzztdB",
    consumerSecret: "ymhQctr7r6FYTWKfcKG1FjPQGyHTTBdeIOvP8h3f301UpgA1VT",
    callbackURL: "http://localhost:3000/api/auth/twitter/callback"
  },
  github: {
    clientId: "79bdab1805aa121cda61",
    clientSecret: "514711afa587ebfc68671eecca71f11fb2771a28",
    callbackURL: "http://localhost:3000/api/auth/github/callback"
  }
};

module.exports = devConfig;
