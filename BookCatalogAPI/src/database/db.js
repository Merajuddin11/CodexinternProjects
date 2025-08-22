import mongoose from "mongoose";
import DBname from "../constant.js";

// for connecting our database
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DBname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
