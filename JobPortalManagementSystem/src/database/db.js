import mongoose from "mongoose";
import DBname from "../constant.js";

// for connect to database
export const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      dbName: DBname,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};
