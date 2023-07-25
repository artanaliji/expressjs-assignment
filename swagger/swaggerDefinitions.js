const swaggerDefinitions = {
  SearchResult: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      phone: {
        type: "string",
      },
      email: {
        type: "string",
      },
      address: {
        type: "string",
      },
    },
  },
};

module.exports = swaggerDefinitions;
