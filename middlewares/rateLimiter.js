const rateLimit = require("express-rate-limit");
const configs = require("../config/config");

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: configs.requestsPerMinute, // limit each IP to {requestsPerMinute} requests per windowMs
});

module.exports = {
  rateLimiter,
};
