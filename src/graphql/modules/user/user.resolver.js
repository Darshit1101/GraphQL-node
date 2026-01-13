import User from "./user.model.js";

const userResolver = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },

  Mutation: {
    createUser: async (_, args) => {
      const user = new User(args);
      return await user.save();
    },

    updateUser: async (_, { id, ...data }) => {
      return await User.findByIdAndUpdate(id, data, { new: true });
    },

    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return "User deleted successfully";
    },
  },
};

export default userResolver;
