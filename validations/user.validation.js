const Joi = require("joi");

const getAllUsers = {
  query: Joi.object({
    page: Joi.number().default(1),
    size: Joi.number().default(20),
    sortBy: Joi.string().valid("name", "email").default("name"),
    sortOrder: Joi.string().valid("asc", "desc").default("asc"),
  }),
};

const getUserById = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
};

const createUser = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    websiteUrl: Joi.string().uri().allow(null),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    websiteUrl: Joi.string().uri().allow(null),
  }).min(1),
};

const deleteUser = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
