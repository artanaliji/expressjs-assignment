const httpStatus = require("http-status");
const { testService } = require("../services/");

const test = (req, res) => {
  const { sort } = req.query;
  const response = testService.test(sort);
  res.status(httpStatus.OK).json(response);
};

module.exports = {
  test,
};
