import Post from "./post.model.js";
import User from "../user/user.model.js";

const postResolver = {
  Query: {
    posts: async () => await Post.find().populate("author"),
    post: async (_, { id }) => await Post.findById(id).populate("author"),
  },

  Mutation: {
    createPost: async (_, { title, content, authorId }) => {
      const post = new Post({ title, content, author: authorId });
      return await post.save();
    },

    updatePost: async (_, { id, ...data }) => {
      return await Post.findByIdAndUpdate(id, data, { new: true }).populate(
        "author"
      );
    },

    deletePost: async (_, { id }) => {
      await Post.findByIdAndDelete(id);
      return "Post deleted successfully";
    },
  },

  Post: {
    author: async (post) => await User.findById(post.author),
  },
};

export default postResolver;
