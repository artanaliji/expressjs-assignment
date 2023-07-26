# Express API for user management

This project is a RESTful API built with Express.js and Node.js. The API will be responsible for managing a collection of
users.

## Features

- CRUD operations for User entity
- API rate limiting per client IP address
- API testing with Mocha & Chai
- API documentation with Swagger
- Docker configuration for containerizing the app

## Getting Started

These instructions will show you how to start running the API on your local machine for development and testing purposes.

### Prerequisites

To run this project, you will need Node.js v20.1.0 or Docker installed on your machine.

### Installation

1. Install the dependencies:

   ```
   npm install
   ```

2. Run the application:
   ```
   npm start
   ```

### Docker

To build the Docker image, use the following command:

```bash
docker build -t express-assignment .
```

To run the Docker container, use the following command:

```bash
docker run -p 8081:8081 -d express-assignment
```

### Docker Compose

If you prefer to use Docker Compose, we have provided a `docker-compose.yml` file in the project root. To start the application with Docker Compose, make sure you have the Docker Compose installed and then run the following script:

```bash
./composeStart.sh
```

This script will build the Docker images if they do not exist and start the Docker containers according to the service definitions specified in `docker-compose.yml`.

Remember to make your `composeStart.sh` file executable by running:

```bash
chmod +x composeStart.sh
```

## Testing

To run the Mocha tests, use the following command:

```
npm test
```

## API Documentation

To view the Swagger API documentation, navigate to `http://localhost:8081/api-docs`.

## Rate Limiting

The API enforces rate limiting per client IP address. The limit is configurable via environment variables.

## Contact

If you have any questions about this project, please feel free to reach out!
