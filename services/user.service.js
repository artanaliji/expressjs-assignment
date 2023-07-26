const logger = require("../config/logger");
const User = require("../models/user");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

/**
 * Get all users with pagination
 * @param {String} page - Page
 * @param {String} size - Items per page
 * @param {String} sortBy - The field used for sorting (name, email)
 * @param {String} sortOrder - Sort order ascending or descending default is ascending
 * @returns {Promise<Array>} - The users list as an array
 */
const getUsers = async (page, size, sortBy, sortOrder) => {
  const offset = (page - 1) * parseInt(size);
  const users = await User.findAll({
    limit: parseInt(size),
    offset,
    order: [[sortBy, sortOrder]],
  });
  return users;
};

/**
 * Create a user
 * @param {Object} userBody - User body
 * @returns {Promise<User>} - The created user
 */
const createUser = async (userBody) => {
  const newUser = await User.create(userBody);
  return newUser;
};

/**
 * Get user by id
 * @param {Number} id - User id
 * @returns {Promise<User>} - Found user
 */
const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

/**
 * Update a user
 * @param {Object} userBody - User body
 * @param {Number} id - User id
 * @returns {Promise<User>} - The updated user
 */
const updateUser = async (id, userBody) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await user.update(userBody);
  return user;
};

/**
 * Delete a user
 * @param {Number} id - User id
 * @returns {Promise<message>} - success message
 */
const deleteUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await user.destroy();
  return { message: `User with ID: ${id} was deleted successfully` };
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUserById,
};
