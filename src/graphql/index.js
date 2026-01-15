import { makeExecutableSchema } from "@graphql-tools/schema";

import userTypeDef from "./modules/user/user.schema.js";
import userResolver from "./modules/user/user.resolver.js";
import postTypeDef from "./modules/post/post.schema.js";
import postResolver from "./modules/post/post.resolver.js";

const schema = makeExecutableSchema({
  typeDefs: [userTypeDef, postTypeDef],
  resolvers: [userResolver, postResolver],
});

export default schema;
