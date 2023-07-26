const swaggerDefinitions = {
  User: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The user's full name",
      },
      email: {
        type: "string",
        description: "The user's email",
      },
      websiteUrl: {
        description: "The user's website URL",
      },
    },
    required: ["name", "email"],
    example: {
      name: "Artan Aliji",
      email: "artanaliji@outlook.com",
      websiteUrl: "https://artanaliji.com",
    },
  },
  BadRequest: {
    type: "object",
    description: " Bad request",
    properties: {
      code: {
        type: "integer",
        example: 400,
      },
      message: {
        type: "string",
        example: '"email" must be a valid email',
      },
      stack: {
        type: "string",
        example: "Error message",
      },
    },
  },
  NotFoundError: {
    type: "object",
    description: "Not found",
    properties: {
      code: {
        type: "integer",
        example: 404,
      },
      message: {
        type: "string",
        example: "User not found",
      },
      stack: {
        type: "string",
        example: "Error message",
      },
    },
  },
  ServerError: {
    type: "object",
    description: "Server error",
    properties: {
      code: {
        type: "integer",
        example: 500,
      },
      message: {
        type: "string",
        example: "Internal server error",
      },
      stack: {
        type: "string",
        example: "Error message",
      },
    },
  },
  TooManyRequests: {
    type: "object",
    description: "Too many requests",
    properties: {
      code: {
        type: "integer",
        example: 429,
      },
      message: {
        type: "string",
        example: "Too many requests",
      },
      stack: {
        type: "string",
        example: "Error message",
      },
    },
  },
};

module.exports = swaggerDefinitions;
