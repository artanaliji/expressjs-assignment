const express = require("express");
const testRoutes = require("./test.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/test",
    route: testRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
