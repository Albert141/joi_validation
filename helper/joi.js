const Joi = require('joi');
const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3) 
        .max(15)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),


    birthyear: Joi.number()
        .integer()
        .min(1800)
        .max(2050),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
module.exports=schema