const { BAD_REQUEST, INTERNAL_SERVER_ERROR, UNAUTHORIZED } = require('http-status-codes');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('./user.service');
const User = require('./user.model');
const devConfig = require('../../../config/env/development')

module.exports = {
    async signup(req, res){
        try{
            const { error, value } = userService.validateSchema(req.body);
            if(error && error.message){
                return res.status(BAD_REQUEST).json(error);
            } 

            const user = await User.create(value);
            return res.json({ success: true, message : 'User created successfully'});
        }
        catch(error){
            console.error(error);
            return res.status(INTERNAL_SERVER_ERROR).json(error);
        }
    },

    async login(req, res){
        try{
            const { error, value } = userService.validateSchema(req.body);
            if(error && error.message){
                return res.status(BAD_REQUEST).json(error);
            } 

            const user = await User.findOne({ email : value.email });

            if(!user){
                return res.status(BAD_REQUEST).json({ error : 'invalid email or password'});
            }

            const matched = await bcryptjs.compare(value.password, user.password);
            if(!matched){
                return res.status(UNAUTHORIZED).json({ err: 'invalid credentials' });
            }

            const token = jwt.sign({ id : user._id}, devConfig.secret, {
                expiresIn: '1d'
            });

            return res.json({ success : true, token });
        }
        catch(error){
            console.error(error);
            return res.status(INTERNAL_SERVER_ERROR).json(error);
        }
    },

    async test(req, res) {
		return res.json(req.currentUser);
	}
}