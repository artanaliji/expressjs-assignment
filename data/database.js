const { Sequelize } = require("sequelize");
const logger = require("../config/logger");
const seedDatabase = require("./seedDatabase");

// Sequelize with in-memory sqlite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
});

sequelize
  .sync()
  .then(() => {
    logger.info("Sequelize synced successfully");
    seedDatabase();
  })
  .catch((err) => logger.error("Something went wrong while syncing", err));

module.exports = sequelize;
