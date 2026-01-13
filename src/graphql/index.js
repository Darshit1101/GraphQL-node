import { makeExecutableSchema } from "@graphql-tools/schema";

import userTypeDef from "./modules/user/user.schema.js";
import userResolver from "./modules/user/user.resolver.js";

const schema = makeExecutableSchema({
  typeDefs: [userTypeDef],
  resolvers: [userResolver],
});

export default schema;
