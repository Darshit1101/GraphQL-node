import UserModel from "./user.model.js";
import PostModel from "../post/post.model.js";

const userResolver = {
  Query: {
    users: async () => await UserModel.find(),
    user: async (_, { id }) => await UserModel.findById(id),
  },

  Mutation: {
    createUser: async (_, args) => {
      const user = new UserModel(args);
      return await user.save();
    },

    updateUser: async (_, { id, ...data }) => {
      return await UserModel.findByIdAndUpdate(id, data, { new: true });
    },

    deleteUser: async (_, { id }) => {
      await UserModel.findByIdAndDelete(id);
      return "User deleted successfully";
    },
  },

  User: {
    posts: async (user) => await PostModel.find({ author: user._id }),
  },
};

export default userResolver;
