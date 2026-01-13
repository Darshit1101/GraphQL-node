import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { PORT } from "./configs/environment.config.js";
import connectDB from "./configs/dbConnection.config.js";
import schema from "./graphql/index.js";

const app = express();

app.use(cors());
app.use(express.json());

await connectDB();

const server = new ApolloServer({
  schema,
});

await server.start();

app.use("/graphql", expressMiddleware(server));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
});
