const joi = require('joi');

const signupValidate = (dataObj) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(8).required(),
  });

  return schema.validateAsync(dataObj, { abortEarly: false });
};

module.exports = signupValidate;
