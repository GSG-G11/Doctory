const joi = require('joi');

const signInValidate = (dataObj) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(8).required(),
  });

  return schema.validateAsync(dataObj, { abortEarly: false });
};

module.exports = signInValidate;
