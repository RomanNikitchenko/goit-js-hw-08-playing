const Joi = require('joi');

const passwordShema = Joi.string().min(3).max(10).alphanum();

console.log(passwordShema.validate('qwqw'));