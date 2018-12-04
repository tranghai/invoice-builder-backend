const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const devConfig = require('../../config/env/development');


const getJWTToken  = payload =>{
    const token = jwt.sign(payload, devConfig.secret, {
        expiresIn: '1d',
      });
      return token;
};

const getEncryptedPassword  = async password => {
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(password, salt);
    return hash;
  };

  module.exports = { getJWTToken, getEncryptedPassword }