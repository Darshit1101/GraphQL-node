import mongoose from "mongoose";
import { APP_DB_URI } from "./environment.config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(APP_DB_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
