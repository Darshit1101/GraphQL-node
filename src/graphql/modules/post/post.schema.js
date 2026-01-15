import { gql } from "graphql-tag";

const postTypeDef = gql`
  type Post {
    id: ID!
    title: String
    content: String
    author: User
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, content: String!, authorId: ID!): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): String
  }
`;

export default postTypeDef;
