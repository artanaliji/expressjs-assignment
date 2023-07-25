const swaggerDefinitions = require("./swaggerDefinitions");
const config = require("../config/config");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
      description: "RESTful API using Swagger",
      contact: {
        name: "Artan Aliji",
        email: "artanaliji@outlook.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
        description: "Development server",
      },
    ],
    components: {
      schemas: swaggerDefinitions,
    },
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerOptions;
