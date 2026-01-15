import PostModel from "./post.model.js";
import UserModel from "../user/user.model.js";

const postResolver = {
  Query: {
    posts: async () => await PostModel.find().populate("author"),
    post: async (_, { id }) => await PostModel.findById(id).populate("author"),
  },

  Mutation: {
    createPost: async (_, { title, content, authorId }) => {
      const post = new PostModel({ title, content, author: authorId });
      return await post.save();
    },

    updatePost: async (_, { id, ...data }) => {
      return await PostModel.findByIdAndUpdate(id, data, {
        new: true,
      }).populate("author");
    },

    deletePost: async (_, { id }) => {
      await PostModel.findByIdAndDelete(id);
      return "Post deleted successfully";
    },
  },

  Post: {
    author: async (post) => await UserModel.findById(post.author),
  },
};

export default postResolver;
