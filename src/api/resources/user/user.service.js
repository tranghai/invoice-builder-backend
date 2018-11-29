const Joi = require("joi");

module.exports = {
    validateSchema(body) {
        const schema = Joi.object().keys({
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string().required()
        });

        const { error , value } = Joi.validate(body, schema);

        if(error && error.message){
            return { error };
        }

        return { value };
    }
}