# GraphQL Node.js API

A simple GraphQL API built with Node.js, Express, Apollo Server, and MongoDB using Mongoose.

## Features

- User CRUD operations (Create, Read, Update, Delete)
- Post CRUD operations with user relations
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

- **User**: Represents a user with id, name, email, age, and posts fields
- **Post**: Represents a post with id, title, content, and author fields

### Queries

- `users`: Get all users
- `user(id: ID!)`: Get a specific user by ID
- `posts`: Get all posts
- `post(id: ID!)`: Get a specific post by ID

### Mutations

- `createUser(name: String!, email: String!, age: Int)`: Create a new user
- `updateUser(id: ID!, name: String, email: String, age: Int)`: Update an existing user
- `deleteUser(id: ID!)`: Delete a user by ID
- `createPost(title: String!, content: String!, authorId: ID!)`: Create a new post
- `updatePost(id: ID!, title: String, content: String)`: Update an existing post
- `deletePost(id: ID!)`: Delete a post by ID

### Example Queries

#### Get all users with their posts:

```graphql
query {
  users {
    id
    name
    email
    age
    posts {
      id
      title
      content
    }
  }
}
```

#### Get all posts with author details:

```graphql
query {
  posts {
    id
    title
    content
    author {
      id
      name
      email
      age
    }
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

#### Create a post:

```graphql
mutation {
  createPost(
    title: "My First Post"
    content: "Hello GraphQL!"
    authorId: "user_id_here"
  ) {
    id
    title
    content
    author {
      name
    }
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
│           ├── user/
│           │   ├── user.model.js     # User Mongoose model
│           │   ├── user.resolver.js  # User GraphQL resolvers
│           │   └── user.schema.js    # User GraphQL schema
│           └── post/
│               ├── post.model.js     # Post Mongoose model
│               ├── post.resolver.js  # Post GraphQL resolvers
│               └── post.schema.js    # Post GraphQL schema
├── package.json
├── .env.example
└── README.md
```

## License

ISC
