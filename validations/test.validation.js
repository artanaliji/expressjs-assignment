const Joi = require("joi");

const testSchema = {
  query: Joi.object({
    sort: Joi.string().valid("name", "email").default("name"),
  }),
};

module.exports = {
  testSchema,
};
