const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");
const logger = require("../config/logger");
const ApiError = require("../utils/ApiError");

const getUsers = catchAsync(async (req, res) => {
  logger.info(`${req.method} ${req.originalUrl} ${JSON.stringify(req.query)}`);
  const { page, size, sortBy, sortOrder } = req.query;
  const users = await userService.getUsers(page, size, sortBy, sortOrder);
  res.status(httpStatus.OK).json(users);
});

const createUser = catchAsync(async (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  const user = await userService.createUser(req.body);
  res.status(httpStatus.OK).json(user);
});

const getUserById = catchAsync(async (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}/${req.params.id}`);
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.status(httpStatus.OK).json(user);
});

const updateUser = catchAsync(async (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}/${req.params.id}`);
  const user = await userService.updateUser(req.params.id, req.body);
  res.status(httpStatus.OK).json(user);
});

const deleteUser = catchAsync(async (req, res) => {
  logger.info(`${req.method}${req.originalUrl}/${req.params.id}`);
  await userService.deleteUserById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
