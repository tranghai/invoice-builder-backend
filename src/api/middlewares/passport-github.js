const passport = require('passport');
const GithubStrategy  = require('passport-github');
const devConfig  = require('../../config/env/development');
const User = require('../resources/user/user.model');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
const configureGithubStrategy  = () =>{
    
}