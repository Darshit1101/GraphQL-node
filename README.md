# GraphQL Node.js API

A simple GraphQL API built with Node.js, Express, Apollo Server, and MongoDB using Mongoose.

## Features

- User CRUD operations (Create, Read, Update, Delete)
- GraphQL schema with queries and mutations
- MongoDB integration with Mongoose
- Environment-based configuration
- CORS enabled
- Hot reload in development mode

## Tech Stack

- **Node.js** (>= 22.0.0)
- **Express.js** - Web framework
- **Apollo Server** - GraphQL server
- **GraphQL** - Query language for APIs
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## Prerequisites

- Node.js (>= 22.0.0)
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Darshit1101/GraphQL-node.git
   cd GraphQL-node
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Update the values as needed:
     ```bash
     PORT=1101
     APP_DB_URI=mongodb://localhost:27017/myDatabaseName
     ```

4. Start MongoDB service (if running locally)

## Running the Application

### Development Mode

```bash
npm run dev
```

The server will start with hot reload and be available at `http://localhost:1101/graphql`

### GraphQL Playground

Once the server is running, you can access the GraphQL Playground at `http://localhost:1101/graphql` to test queries and mutations.

## GraphQL Schema

### Types

- **User**: Represents a user with id, name, email, and age fields

### Queries

- `users`: Get all users
- `user(id: ID!)`: Get a specific user by ID

### Mutations

- `createUser(name: String!, email: String!, age: Int)`: Create a new user
- `updateUser(id: ID!, name: String, email: String, age: Int)`: Update an existing user
- `deleteUser(id: ID!)`: Delete a user by ID

### Example Queries

#### Get all users:

```graphql
query {
  users {
    id
    name
    email
    age
  }
}
```

#### Create a user:

```graphql
mutation {
  createUser(name: "John Doe", email: "john@example.com", age: 30) {
    id
    name
    email
    age
  }
}
```

## Project Structure

```
├── src/
│   ├── server.js                 # Main server file
│   ├── configs/
│   │   ├── dbConnection.config.js # Database connection
│   │   └── environment.config.js  # Environment variables
│   └── graphql/
│       ├── index.js              # GraphQL schema setup
│       └── modules/
│           └── user/
│               ├── user.model.js     # User Mongoose model
│               ├── user.resolver.js  # User GraphQL resolvers
│               └── user.schema.js    # User GraphQL schema
├── package.json
├── .env.example
└── README.md
```

## License

ISC
